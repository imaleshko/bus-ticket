const express = require("express");
const router = express.Router();
const { busRoutesData } = require('../mock_data/busRoutesData')
const { bookingsData } = require("../mock_data/bookingsData");
const { userData } = require("../mock_data/userData");

router.post('/', (req, res) => {
    const { routeId, date, seats, price, email } = req.body;

    const routeBookings = bookingsData.filter(booking => booking.routeId === routeId && booking.date === date);

    let booked = [];
    routeBookings.forEach(booking => booked = [...booked, ...booking.seats]);
    const isConflict = seats.some(seat => booked.includes(seat));
    if (isConflict) {
        return res.status(400).send({message: "Місце вже зайнято"});
    }

    const routeInfo = busRoutesData.find(route => route.id === routeId);

    if(!routeInfo) {
        return res.status(400).json({message: "Маршрут не знайдено"})
    }

    const newBooking = {
        id: Math.random() * 150,
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
    }

    bookingsData.push(newBooking);

    const user = userData.find(user => user.email === email);
    if (user) {
        user.tickets.push(newBooking);
    }

    res.status(201).json(newBooking);
})

module.exports = router;