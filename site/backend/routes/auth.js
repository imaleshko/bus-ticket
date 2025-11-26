const express = require('express');
const router = express.Router();
const { userData } = require('../mock_data/userData');

router.post('/register', (req, res) => {
    const { name, surname, email, phone, password } = req.body;
    const existingUser = userData.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({message: 'Користувач з таким email вже існує'});
    }

    const newUser = {
        id: Math.random() * 150,
        name,
        surname,
        email,
        phone,
        password,
        tickets: []
    };

    userData.push(newUser);

    res.status(200).json({user: newUser});
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = userData.find(user => user.email === email);

    if (!user || user.password !== password) {
        return res.status(400).json({message: "Неправильна пошта або пароль"})
    }

    res.json({user: user});
})

module.exports = router;