const express = require('express');
const cors = require('cors')
const app = express();
const busRoutes = require("./routes/busRoutes");
const auth = require("./routes/auth");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());
app.use(cors());

app.use('/api/routes', busRoutes)
app.use('/api/auth', auth)
app.use('/api/booking', bookingRoutes)

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
})