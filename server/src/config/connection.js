const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connection = async () => {
    try{
        const uri = process.env.DB_URI;
        const dbName = process.env.DB_NAME;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: dbName,
        });
        console.log("Connected to the database")
    } catch (error) {
        console.log("Database connection error: ",error);
    }
    
};

module.exports = connection;
