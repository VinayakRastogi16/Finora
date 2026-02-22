import express from "express"
import mongoose from "mongoose";
import 'dotenv/config';
import bodyParser from "body-parser";
import cors from 'cors'
import PositionModel from './models/PositionModel.js';
import HoldingsModel from './models/HoldingsModel.js';
import OrdersModel from './models/OrdersModel.js';
const PORT = process.env.PORT || 8080;
const uri = process.env.DB_URL;



const app = express();
mongoose.connect(uri)

app.use(cors());
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

app.listen(8080, ()=>{
    console.log("Server listening at port 8080")
});

