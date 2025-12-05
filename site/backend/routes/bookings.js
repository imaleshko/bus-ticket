const express = require("express");
const router = express.Router();
const BusRoute = require("../schemes/busRoute");
const Booking = require("../schemes/booking");
const User = require("../schemes/user");

router.post('/', async (req, res) => {
    try {
        const {routeId, date, seats, price, email} = req.body;

        const routeBookings = await Booking.find({routeId, date});

        let bookedSeats = [];
        routeBookings.forEach(booking => bookedSeats = [...bookedSeats, ...booking.seats]);

        const isConflict = seats.some(seat => bookedSeats.includes(seat));
        if (isConflict) {
            return res.status(400).send({message: "Місце вже зайнято"});
        }

        const routeInfo = await BusRoute.findOne({routeId});

        if (!routeInfo) {
            return res.status(400).json({message: "Маршрут не знайдено"});
        }

        const newBooking = new Booking({
            routeId,
            date,
            seats,
            price,
            email,
            from: routeInfo.from,
            to: routeInfo.to,
            departureTime: routeInfo.departureTime,
            arrivalTime: routeInfo.arrivalTime,
            duration: routeInfo.duration,
            transport: routeInfo.transport,
        })

        await newBooking.save();

        const user = await User.findOne({email});
        if (user) {
            user.tickets.push(newBooking);
            await user.save();
        }

        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Помилка сервера" });
    }
})

module.exports = router;