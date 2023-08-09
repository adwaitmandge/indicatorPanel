const mongoose = require("mongoose");
const News = require("../models/newsModel");
const mainfrt = async (req, res) => {
  try {
    console.log("in mainfrt");

    // const categoryCounts = await News.aggregate([
    //     {
    //       $group: {
    //         _id: '$category',
    //         count: { $sum: 1 }
    //       }
    //     },
    //     {
    //       $sort: { _id: 1 }
    //     }
    //   ]);
    const newsArticles = await News.find(); // Fetch all news articles

    const categoryCounts = {}; // To store category-wise counts of real and fake news

    newsArticles.forEach((article) => {
      const category = article.category;
      const newsType = article.newsType;

      if (!categoryCounts[category]) {
        categoryCounts[category] = {
          realCount: 0,
          fakeCount: 0,
        };
      }

      if (newsType === "factual news") {
        categoryCounts[category].realCount++;
      } else {
        categoryCounts[category].fakeCount++;
      }
    });

    res.status(200).json(categoryCounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occured" });
  }
};

const lbyrt = async (req, res) => {
  // try {
  //   const newsArticles = await News.find();
  //   arr = newsArticles.map((article) => {
  //       return {
  //           category: article.category,
  //           lbyr: article.lbyr,
  //       }
  //   });
  //   // Fetch all news articles
  //   res.status(200).json(arr);
  // }
  try {
    const newsArticles = await News.find();
    const categoryCounts2 = {
      sports: 0,
      politics: 0,
      education: 0,
      entertainment: 0,
      business: 0,
      health: 0,
      technology: 0, // Corrected key name here
      religion: 0,
      other: 0,
    };
    newsArticles.forEach((article) => {
      const category = article.category;
      const lbyr = article.lbyr;
  
      if (!categoryCounts2[category]) {
        categoryCounts2[category] = lbyr; // Assign lbyr directly
      } else {
        categoryCounts2[category] += lbyr; // Increment the value
      }
    });
    res.status(200).json(categoryCounts2);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

module.exports = { mainfrt, lbyrt };
