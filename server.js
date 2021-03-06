const express = require("express");
const mongoose =  require("mongoose");
const app = express()
const methodOverride = require("method-override")
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db=mongoose.connection;
db.on('error', (err) => console.log(" mongo is not running - Error: " + err.message ));
db.on('connected', ()=> console.log('mongoose connected'));
db.on('disconnected', () => console.log("mongo disconnected"));

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))
app.use("/static", express.static("public"))
app.set("view engine", "ejs");


const storeController = require("./controllers/storeItems")
app.use("/store", storeController);

app.post(function(req, res, next){
    next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("we are running"))