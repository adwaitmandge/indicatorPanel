const mongoose = require("mongoose");
const News = require("../models/newsModel");

const storeNews = async (req, res) => {
  try {
    console.log(req.body)
    const newData = req.body;
    console.log('About to create newsItem', newData);
    
    const newsItem = new News(newData); // Make sure "News" is your mongoose model
    
    console.log('Created newsItem', newsItem);
    
    await newsItem.save();
    
    res.status(201).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = { storeNews };
