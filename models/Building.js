const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
    },
    numberOfRooms: {
        type: String,
        trim: true,
    },
    numberOfFloors: {
        type: String,
        trim: true,
    },
    energyCost: {
        type: String,
        trim: true,
    },
    energyGeneration: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Building', buildingSchema);
