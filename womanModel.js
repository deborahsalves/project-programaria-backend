const mongoose = require('mongoose');

const WomanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('diva', WomanSchema); // use SINGULAR, the db will build plural with -s
