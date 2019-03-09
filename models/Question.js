const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        trim: true,
    },
    // answers: {
    //     type: Answer,
    //     trim: true,
    // },
});

module.exports = mongoose.model('Question', questionSchema);
