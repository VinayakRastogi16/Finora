import express from "express"
import mongoose from "mongoose";
import 'dotenv/config';
import PositionModel from './models/PositionModel.js';
const PORT = process.env.PORT || 8080;
const uri = process.env.DB_URL;
const app = express();
mongoose.connect(uri)

app.get("/", (req,res)=>{
    res.send("Hello Bitch");
})

app.listen(8080, ()=>{
    console.log("Server listening at port 8080")
});

