const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const newsSchema = new mongoose.Schema({
  category: String,
  lbyr: Number,
  viewsType: String,
  newsType: String,
  propogandaType: [String],
  speechType: String,
  clickbaitType: Number,
  sentiment: [
    {
      label: String,  
      score: Number,
    },
  ],
  impKeyWords: [String],
});

const News = mongoose.model('News', newsSchema);
module.exports = News;
