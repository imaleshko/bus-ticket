const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET;

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
    return;
  }

  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Не авторизовано: Відсутній токен" });
    }

    req.user = jwt.verify(token, ACCESS_SECRET);

    next();
  } catch {
    return res.status(401).json({
      message: "Не авторизовано: Токен недійсний або скінчився термін дії",
    });
  }
};
