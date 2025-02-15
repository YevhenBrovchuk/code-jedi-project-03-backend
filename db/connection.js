const mongoose = require('mongoose');
const { DB_HOST } = process.env;
const connectDB = async () => {
    try {
        await mongoose.connect(DB_HOST);
        console.log("Connected to DB");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }

};

module.exports = connectDB;