const mongoose = require("mongoose")

const storeSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const Items = mongoose.model("Items", storeSchema)

module.exports = Items