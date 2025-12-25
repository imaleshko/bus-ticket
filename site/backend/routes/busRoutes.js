const express = require('express');
const router = express.Router();
const { busRoutesData } = require('../mock_data/busRoutesData');
const { bookingsData } = require('../mock_data/bookingsData');

router.get('/', (req, res) => {
    const { from, to } = req.query;
    let routes = busRoutesData;

    if (from) {
        routes = routes.filter((route) => route.from.toLowerCase() === from.toLowerCase());
    }
    if (to) {
        routes = routes.filter((route) => route.to.toLowerCase() === to.toLowerCase());
    }

    res.json(routes);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const { date } = req.query;

    const bus_route = busRoutesData.find((route) => route.id === id);

    if (!bus_route) {
        res.status(404).send('No bus route found');
        return;
    }

    const bookings = bookingsData.filter(booking => booking.routeId === id && booking.date === date);

    let bookingSeats = []
    bookings.forEach(booking => {
        bookingSeats = [
            ...bookingSeats, ...booking.seats,
        ]
    })

    res.json({
        ...bus_route,
        bookingSeats,
    });
})

module.exports = router;