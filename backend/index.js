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

const PORT = process.env.PORT || 8080;
const uri = process.env.DB_URL;



const app = express();
mongoose.connect(uri)

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
];

app.use(cors({
    origin:allowedOrigins,
    credentials:true,
}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello Bitch");
});

app.get('/allHoldings', async (req,res)=>{
    let allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
})

app.get('/allPositions', async (req,res)=>{
    let allPositions = await PositionModel.find({});

    res.json(allPositions);
})

app.post("/newOrder", async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order Saved!");

})

app.post("/buy", async (req,res)=>{
    let {name, qty, price} = req.body;
    let newHoldings = new HoldingsModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        avg: Math.floor((Math.random()*99)*10),
        currValue: req.body.price * req.body.qty,
    });

    newHoldings.save();

    console.log("New Holdings Saved");
})

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

        const user = await UserModel.create({
            email,
            username,
            password,
        })


        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"strict",
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
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
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

app.get('/allOrders', async (req,res)=>{
    let allOrders = await OrdersModel.find({});

    res.json(allOrders);
})

app.listen(8080, ()=>{
    console.log("Server listening at port 8080")
});

