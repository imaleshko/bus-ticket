const mongoose = require('mongoose');

const busRouteSchema = new mongoose.Schema({
    routeId: {
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
    totalSeats: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("busRoute", busRouteSchema);