require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();
const busRoutes = require("./routes/busRoutes");
const auth = require("./routes/auth");
const bookingRoutes = require("./routes/bookings");

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        'http://localhost:5173',
        process.env.CLIENT_URL
    ],
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/routes', busRoutes)
app.use('/api/auth', auth)
app.use('/api/booking', bookingRoutes)

app.get('/', (req, res) => {
    res.send("Ok")
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Not connected to MongoDB"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})