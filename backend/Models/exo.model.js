const mongoose = require("mongoose");
const { Schema } = mongoose;


const exoSchema = new Schema({
  guid: Number,
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  duration: Number,
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Exo", exoSchema);
