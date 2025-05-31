const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlife";
main().then(() =>{
    console.log("connected to DB");
}).catch((err) =>{
    console.log(err); 
});

// Create DataBse
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "683580caea26da5fcb7ffe47"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();