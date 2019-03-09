const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');
const Question = mongoose.model('Question');

router.get(
    '/',
    function(req, res)
    {
        var users = [
            {
                "id": 1,
                "name": "John Willian",
                "avatar": "/img/avatar2.png",
                "energy": 37,
                "ropes": 22,
            },
            {
                "id": 2,
                "name": "Maggy Tailor",
                "avatar": "/img/avatar6.png",
                "energy": 30,
                "ropes": 15,
            },
        ];

        res.render('index', { title: 'Home Page', users: users });
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
        var createNewHouse = req.query.new_house !== undefined && req.query.new_house == 1 ? 1 : 0;

        res.render('city', { title: 'My City', createNewHouse: createNewHouse });
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
                "avatar": "/img/avatar2.png",
                "energy": 37,
                "ropes": 22,
            },
            {
                "id": 2,
                "name": "Maggy Tailor",
                "avatar": "/img/avatar6.png",
                "energy": 30,
                "ropes": 15,
            },
            {
                "id": 3,
                "name": "John Willian",
                "avatar": "/img/img_avatar.png",
                "energy": 17,
                "ropes": 10,
            },
            {
                "id": 4,
                "name": "Anna Hilston",
                "avatar": "/img/img_avatar2.png",
                "energy": 15,
                "ropes": 10,
            },
        ];

        res.render('ask-electricity', { title: 'Ask Electricity', users: users });
    }
);

router.get(
    '/new-building',
    function(req, res)
    {
        res.render('new-building', { title: 'New Building' });
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