const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();
const busRoutes = require("./routes/busRoutes");
const auth = require("./routes/auth");
const bookingRoutes = require("./routes/bookings");

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/routes', busRoutes)
app.use('/api/auth', auth)
app.use('/api/booking', bookingRoutes)

mongoose.connect("mongodb+srv://maleshkoivan_db_user:eLiHauzcXVjb0PPp@cluster0.8r9prdn.mongodb.net/?appName=Cluster0")
    .then(() => console.log("Connected to MongoDB"));

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})