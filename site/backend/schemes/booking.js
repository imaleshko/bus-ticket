const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema ({
    routeId: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    seats: {
        type: [Number],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    transport: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('booking', bookingSchema);