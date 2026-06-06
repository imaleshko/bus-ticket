const express = require("express");
const router = express.Router();
const User = require("../schemes/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

router.post("/register", async (req, res) => {
  try {
    const { name, surname, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Користувач з таким email вже існує" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      email,
      phone,
      password: hash,
    });

    await newUser.save();

    const accessToken = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      ACCESS_SECRET,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      {
        id: newUser._id,
      },
      REFRESH_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.json({ accessToken, user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Помилка сервера" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Неправильна пошта або пароль" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      ACCESS_SECRET,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      {
        id: user._id,
      },
      REFRESH_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.json({ accessToken, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Помилка сервера" });
  }
});

router.get("/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({ message: "Не авторизовано" });
    }

    const userData = jwt.verify(refreshToken, REFRESH_SECRET);

    const user = await User.findById(userData.id);

    if (!user) {
      return res.status(401).json({ message: "Користувача не знайдено" });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      ACCESS_SECRET,
      { expiresIn: "15m" },
    );

    res.json({ accessToken, user });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Не авторизовано" });
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("refreshToken", {
    secure: true,
    sameSite: "none",
  });
  res.json({ message: "Вихід успішний" });
});

module.exports = router;
