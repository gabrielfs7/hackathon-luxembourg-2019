const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('City', citySchema);