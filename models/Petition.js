const mongoose = require("mongoose");

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const PetitionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: String,
    default: () => today.toDateString(),
  },
});

module.exports = mongoose.model("Petition", PetitionSchema);
