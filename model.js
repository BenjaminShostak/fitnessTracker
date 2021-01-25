const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  numberReps: {
    type: Number,
    unique: true,
    required: true
  },


  date: {
    type: Date,
    default: Date.now
  },

  longRun: {
    type: String,
    validate: [({ length }) => length >= 6, "LongRun should be cardio."]
  }
});

const Example = mongoose.model("Exercise", ExampleSchema);

module.exports = Example;
