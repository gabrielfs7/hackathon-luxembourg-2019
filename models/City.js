const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    // user: {
    //     type: User,
    // },
    name: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('City', citySchema);