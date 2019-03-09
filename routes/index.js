const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = mongoose.model('User');
const Question = mongoose.model('Question');

router.get(
    '/users',
    function(req, res) {
        res.render('index', { title: ' Listing users', users: [] });
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
    '/my-ropes',
    function(req, res)
    {
        res.render('my-ropes', { title: 'My Ropes' });
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

router.get(
    '/questions/:questionId/answer',
    function(req, res)
    {
        var errorVariable = null;

        var questionVariable = {
            "question": "My Question",
            "answers": [
                {
                    "correct": false,
                    "answer": "Alternative 1",
                    "electricity": 0
                },
                {
                    "correct": true,
                    "answer": "Alternative 2",
                    "electricity": 1
                },
                {
                    "correct": true,
                    "answer": "Alternative 3",
                    "electricity": 2
                },
            ]
        }

        //
        // Question.findById(
        //     req.params.questionId,
        //     function (err, row) {
        //         if (!err) {
        //             errorVariable = JSON.stringify(err, undefined, 2);
        //         } else {
        //             questionVariable = row;
        //
        //             console.log('....................................................');
        //             console.log(questionVariable);
        //         }
        //     }
        // );

        res.render('answer-question', { title: 'Answer Question', question: questionVariable });
    }
);

module.exports = router;