const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        console.log('DB connection started');
    
        await mongoose.connect('mongodb+srv://salvesdeborah:BCQO1AxuviJ7ONqd@clusterwomen.5pvzp9n.mongodb.net/?retryWrites=true&w=majority');
    
        console.log('DB connection was successful');
    } catch (err) {
        console.log(err);
    }
}

module.exports = dbConnection;