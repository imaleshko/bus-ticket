const express = require('express');
const router = express.Router();
const User = require('../schemes/user');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    try {
        const {name, surname, email, phone, password} = req.body;
        const existingUser = await User.findOne({email});

        if (existingUser) {
            return res.status(400).json({message: 'Користувач з таким email вже існує'});
        }

        const hash = await bcrypt.hash(password, 10);

        const newUser = new User ({
            name,
            surname,
            email,
            phone,
            password: hash,
        });

        await newUser.save();

        res.status(200).json({user: newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({message: "Неправильна пошта або пароль"})
        }

        res.json({user: user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

module.exports = router;