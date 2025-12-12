const express = require("express");
const router = express.Router();
const BusRoute = require("../schemes/busRoute");
const Booking = require("../schemes/booking");
const authMiddleware = require("../middlewares/authMiddleware");

router.post('/', authMiddleware, async (req, res) => {
    try {
        const {routeId, date, seat, email} = req.body;

        const existingBooking = await Booking.findOne({
            routeId: routeId,
            date: date,
            seat: seat,
        })

        if (existingBooking) {
            return res.status(400).send({message: "Місце вже зайнято"});
        }

        const routeInfo = await BusRoute.findOne({ routeId });

        if (!routeInfo) {
            return res.status(400).json({message: "Маршрут не знайдено"});
        }

        const newBooking = new Booking({
            routeId,
            date,
            seat,
            email,
            from: routeInfo.from,
            to: routeInfo.to,
            departureTime: routeInfo.departureTime,
            arrivalTime: routeInfo.arrivalTime,
            distance: routeInfo.distance,
            duration: routeInfo.duration,
            price: routeInfo.price,
            transport: routeInfo.transport,
        })

        await newBooking.save();

        res.status(201).json(newBooking);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Місце вже зайнято" });
        }
        console.log(error.message);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

router.get('/userticket', authMiddleware, async (req, res) => {
    try {
        const {email} = req.query;

        if (!email) {
            return res.status(400).json();
        }

        const tickets = await Booking.find({email}).sort({ createdAt: -1 });

        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера" });
    }
})

module.exports = router;