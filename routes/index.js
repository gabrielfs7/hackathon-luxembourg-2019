const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const { body, validationResult } = require('express-validator/check');

const User = mongoose.model('User');

router.get(
    '/users',
    function(req, res) {
        User.find()
        .then(
            function (users) {
                res.render('index', { title: 'Listing users', users });
            }
        )
        .catch(
            function () {
                res.send('Sorry! Something went wrong.');
            }
        );
    }
);

router.get(
    '/',
    function(req, res)
    {
        res.render('form', { title: 'User form' });
    }
);

module.exports = router;