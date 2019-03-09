const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        trim: true,
    },
    // answers: {
    //     type: [Answer],
    //     default: undefined
    // },
});

module.exports = mongoose.model('Question', questionSchema);
