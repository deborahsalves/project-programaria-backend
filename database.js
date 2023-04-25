const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try{
        console.log('DB connection started');
    
        await mongoose.connect(process.env.MONGO_URL);
    
        console.log('DB connection was successful');
    } catch (err) {
        console.log(err);
    }
}

module.exports = dbConnection;