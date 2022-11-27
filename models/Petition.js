const mongoose = require("mongoose");

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
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Petition", PetitionSchema);
