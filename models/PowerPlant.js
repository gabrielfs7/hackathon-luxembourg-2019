const mongoose = require('mongoose');

const powerPlantSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
    },
    numberOfCells: {
        type: String,
        trim: true,
    },
    energyCapacity: {
        type: String,
        trim: true,
    },
    energyStored: {
        type: String,
        trim: true,
    },
    energyCost: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('PowerPlant', powerPlantSchema);
