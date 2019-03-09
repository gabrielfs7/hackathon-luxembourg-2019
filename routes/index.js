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
        var users = [
            {
                "id": 1,
                "name": "John Willian",
                "avatar": "/img/avatar6.png",
            },
            {
                "id": 2,
                "name": "John Willian",
                "avatar": "/img/avatar6.png",
            },
            {
                "id": 3,
                "name": "John Willian",
                "avatar": "/img/avatar6.png",
            },
            {
                "id": 4,
                "name": "John Willian",
                "avatar": "/img/avatar6.png",
            },
        ];

        res.render('ask-electricity', { title: 'Ask Electricity', users: users });
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
        var questionVariable = {
            "question": "What is the best Tech event in Luxembourg?",
            "answers": [
                {
                    "id": 1,
                    "correct": true,
                    "answer": "Game of Code",
                    "electricity": 2
                },
                {
                    "id": 2,
                    "correct": true,
                    "answer": "Schueberfouer",
                    "electricity": 0
                },
                {
                    "id": 3,
                    "correct": true,
                    "answer": "My Team's Daily stand-up",
                    "electricity": 1
                },
                {
                    "id": 4,
                    "correct": true,
                    "answer": "Utopolis Movie Theater",
                    "electricity": 0
                }
            ]
        }

        res.render('answer-question', { title: 'Answer Question', question: questionVariable });
    }
);

router.get(
    '/questions/:questionId/answer-correct',
    function(req, res)
    {
        var isCorrect = req.query.answer !== undefined && req.query.answer == 1;

        var questionVariable = {
            "question": "What is the best Tech event in Luxembourg?",
            "answer": "Game of Code",
            "electricity": 2
        }

        res.render('answer-correct', { title: 'Correct Answer', question: questionVariable, isCorrect: isCorrect });
    }
);

router.get(
    '/questions/:questionId/answer-wrong',
    function(req, res)
    {
        res.render('answer-wrong', { title: 'Correct Answer' });
    }
);

module.exports = router;