const jwt = require("jsonwebtoken")

const ACCESS_SECRET = "pCqg1O0p6Vn4IuZxT1FJ3yq2uE7K9dR4wR8g0mYf2sA=";

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
        return;
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Не авторизовано: Відсутній токен" });
        }

        const decoded = jwt.verify(token, ACCESS_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Не авторизовано: Токен недійсний або скінчився термін дії" });
    }
}