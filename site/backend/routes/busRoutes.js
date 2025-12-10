const express = require('express');
const router = express.Router();
const BusRoute = require('../schemes/busRoute');
const Booking = require("../schemes/booking");

router.get('/', async (req, res) => {
    try {
        const {from, to} = req.query;

        let query = {};
        if (from) {
            query.from = from;
        }
        if (to) {
            query.to = to;
        }

        const routes = await BusRoute.find(query);

        res.json(routes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

router.get('/:routeId', async (req, res) => {
    try {
        const {routeId} = req.params;
        const {date} = req.query;

        const bus_route = await BusRoute.findOne({routeId})

        if (!bus_route) {
            res.status(404).send('Маршрут не знайдено');
            return;
        }

        const bookings = await Booking.find({routeId, date}).select('seat');

        let bookingSeats = bookings.map(booking => booking.seat);

        res.json({
            ...bus_route.toObject(),
            bookingSeats,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

module.exports = router;