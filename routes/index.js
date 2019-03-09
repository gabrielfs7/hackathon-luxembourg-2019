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
                res.render('index', { title: ' Listing users', users });
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
        res.render('index', { title: 'User form' });
    }
);

router.get(
    '/cities',
    function(req, res)
    {
        //@TODO Return list of cities
        res.render('cities', { title: 'User form' });
    }
);

router.get(
    '/my-city',
    function(req, res)
    {
        res.render('city', { title: 'My City' });
    }
);

router.get(
    '/ask-electricity',
    function(req, res)
    {
        res.render('ask-electricity', { title: 'Ask Electricity' });
    }
);

router.get(
    '/questions/:questionId',
    function(req, res)
    {
        //req.params.questionId
        //@TODO Return the question with the possible answers
        res.render('form', { title: 'User form' });
    }
);

router.post(
    '/questions/:questionId/answer',
    function(req, res)
    {
        //@TODO Receive the answer and store the points
        //req.params.questionId
        res.render('form', { title: 'User form' });
    }
);

module.exports = router;