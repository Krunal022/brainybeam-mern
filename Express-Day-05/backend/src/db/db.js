const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("MonGoDB Connected");
        })
    } catch (err) {
        console.error(err);
        console.error(err.stack);
    }
};

module.exports = connectDB;