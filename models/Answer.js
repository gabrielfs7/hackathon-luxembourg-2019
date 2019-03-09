const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    correct: {
        type: String,
        trim: true,
    },
    answer: {
        type: String,
        trim: true,
    },
    energyGiven: {
        type: String,
        trim: true,
    },
    energyEarned: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Answer', answerSchema);
