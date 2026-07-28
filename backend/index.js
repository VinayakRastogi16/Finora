import express from "express"
import mongoose from "mongoose";
import 'dotenv/config';
import bodyParser from "body-parser";
import cors from 'cors'
import PositionModel from './models/PositionModel.js';
import HoldingsModel from './models/HoldingsModel.js';
import OrdersModel from './models/OrdersModel.js';
import UserModel from "./models/UserModel.js";
import bcrypt from "bcryptjs";
import createSecretToken from './utils/SecretToken.js';
import cookieParser from "cookie-parser";
import verifyUser from "./middlewares/Auth.js";



const PORT = process.env.PORT || 8080;
const uri = process.env.DB_URL;



const app = express();
mongoose.connect(uri)

const allowedOrigins = [
 "https://finora-y3fy.netlify.app",
  "https://finora-dashboard-y3fy.netlify.app",
];

app.use(cookieParser());
app.use(cors({
    origin:allowedOrigins,
    credentials:true,
}));
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Server running");
});


app.get("/verify", verifyUser, async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

app.get('/allHoldings', verifyUser, async (req,res)=>{
    let allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
})

app.get('/allPositions', verifyUser, async (req,res)=>{
    let allPositions = await PositionModel.find({});

    res.json(allPositions);
})

app.post("/newOrder", verifyUser, async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order Saved!");

})

app.post("/buy", verifyUser, async (req, res) => {
  try {
    let { name, qty, price } = req.body;

    if (!name || qty <= 0 || price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid input"
      });
    }

    let existingHolding = await HoldingsModel.findOne({ name });

    if (existingHolding) {
      // weighted average calculation
      let totalCost = (existingHolding.qty * existingHolding.price) + (qty * price);
      let totalQty = existingHolding.qty + qty;
      let newAvg = totalCost / totalQty;

      let updatedHolding = await HoldingsModel.findOneAndUpdate(
        { name },
        {
          $set: {
            price: newAvg,
            currValue: totalQty * newAvg
          },
          $inc: { qty: qty }
        },
        { new: true }
      );

      return res.json({
        success: true,
        data: updatedHolding
      });
    }

    // If stock doesn't exist, create new holding
    let newHolding = await HoldingsModel.create({
      name,
      qty,
      price,
      avg: price,
      currValue: price * qty
    });

    res.json({
      success: true,
      data: newHolding
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

app.post("/sell", verifyUser, async (req, res) => {
  try {
    let { name, qty, price } = req.body;

    let sellStock = await HoldingsModel.findOne({ name });

    if (!sellStock) {
      return res.status(404).json({
        success: false,
        message: "No holdings found"
      });
    }

    if (sellStock.qty < qty) {
      return res.status(400).json({
        success: false,
        message: "Not enough quantity to sell"
      });
    }

    let updatedHolding = await HoldingsModel.findOneAndUpdate(
      { name },
      { $inc: { qty: -qty } },  // decrement atomically
      { returnDocument: "after" }
    );

    res.json({
      success: true,
      data: updatedHolding
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

app.post("/signup", async (req,res)=>{
    try{
        const {email, password, username} = req.body;

        if(!email|| !password || !username){
            return res.status(400).json({message:"All fields are required"});
        }

        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(409).json({message:"User already exists"});
        }
        
        const hashedPassword = await bcrypt.hash(password,10);

        const user = await UserModel.create({
            email,
            username,
            password:hashedPassword,
        })


        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"none",
            maxAge: 3*24*60*60*1000,
        })

        res.status(201).json({message:"User registerd successfully",
            success:true,
            user:{
                id:user._id,
                email:user.email,
                username:user.username,
            },
        });
    }catch(e){
        console.error(e);
        res.status(500).json({message:"Internal server error"})

    }
})

app.post("/login",async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

app.get('/allOrders', verifyUser, async (req,res)=>{
    let allOrders = await OrdersModel.find({});

    res.json(allOrders);
})

app.listen(8080, ()=>{
    console.log("Server listening at port 8080")
});

