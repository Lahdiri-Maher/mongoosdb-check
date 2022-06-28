const mongoose = require("mongoose");
const PersonPrototype = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("Person", PersonPrototype);
