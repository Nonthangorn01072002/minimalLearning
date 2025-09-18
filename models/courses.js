const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Course", courseSchema);
