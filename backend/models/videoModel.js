const { Schema, model, Types } = require("../connection");

const videoSchema = new Schema({
  title: { type: String, required: true },
  file: { type: String },
  transcription: String,
  user: { type: Types.ObjectId, ref: 'user' },
  created_at: Date,
});

module.exports = model("videos", videoSchema);