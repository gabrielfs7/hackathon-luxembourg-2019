require('./models/Building');
require('./models/City');
require('./models/Answer');
require('./models/Question');
require('./models/PowerPlant');
require('./models/User');

const app = require('./app');

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', function() {
    console.log(`Mongoose  connection open on ${process.env.DATABASE}`);
})
.on('error', function(err) {
    console.log(`Connection error: ${err.message}`);
});

const server = app.listen(8080, function() {
    console.log(`Express is running on port ${server.address().port}`);
});