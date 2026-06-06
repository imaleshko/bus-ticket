const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    routeId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    seat: {
      type: Number,
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
  },
  { timestamps: true },
);

bookingSchema.index({ routeId: 1, date: 1, seat: 1 }, { unique: true });

module.exports = mongoose.model("booking", bookingSchema);
