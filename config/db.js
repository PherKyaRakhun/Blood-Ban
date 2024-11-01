const mongoose = require("mongoose");
const colors = require("colors");
//mongodb+srv://warriorsrajpoot:Blood_Bank@47@ks-fyp.kzt0l.mongodb.net/?retryWrites=true&w=majority&appName=KS-FYP
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to the DataBase ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongoose DataBase Error ${error}`.bgWhite.black);
  }
};

module.exports = connectDB;
