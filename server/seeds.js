const News = require("./models/newsModel");

const { default: mongoose } = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://adwaitmandge:7rfE8FDix2gzSVm@cluster0.1b6o93r.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });

const queryData = [
  {
    category: "sports",
    lbyr: 0.010289142866402848,
    viewsType: "ambivalent right",
    newsType: "factual news",
    propogandaType: ["Exaggeration or Minimisation", "Appeal to authority"],
    speechType: "normal",
    clickbaitType: 0.4156297743320465,
    sentiment: [{ label: "POSITIVE", score: 0.9993532299995422 }],
    impKeyWords: [
      "ĠICC",
      "ĠCricket",
      "ĠWorld",
      "ĠCup",
      "ĠCricket",
      "ĠWorld",
      "ĠCup",
      "ĠIndia",
      "ĠSri",
      "ĠLanka",
      "ĠBangladesh",
      "ĠIndia",
      "ĠSri",
      "ĠLanka",
    ],
  },
  {
    category: "sports",
    lbyr: 0.010289142866402848,
    viewsType: "ambivalent right",
    newsType: "factual news",
    propogandaType: ["Exaggeration or Minimisation", "Appeal to authority"],
    speechType: "normal",
    clickbaitType: 0.4156297743320465,
    sentiment: [{ label: "POSITIVE", score: 0.9993532299995422 }],
    impKeyWords: [
      "ĠICC",
      "ĠCricket",
      "ĠWorld",
      "ĠCup",
      "ĠCricket",
      "ĠWorld",
      "ĠCup",
      "ĠIndia",
      "ĠSri",
      "ĠLanka",
      "ĠBangladesh",
      "ĠIndia",
      "ĠSri",
      "ĠLanka",
    ],
  },
  {
    category: "science and technology",
    lbyr: 0.011002594025522887,
    viewsType: "progessive left",
    newsType: "factual news",
    propogandaType: [
      "Obfuscation, Intentional vagueness, Confusion",
      "Misrepresentation of Someone's Position,",
    ],
    speechType: "normal",
    clickbaitType: 0.30716240406036377,
    sentiment: [
      {
        label: "POSITIVE",
        score: 0.9948241710662842,
        _id: new ObjectId("64d2bf69c206adecbcb26e61"),
      },
    ],
    impKeyWords: [],
    _id: new ObjectId("64d2bf69c206adecbcb26e60"),
  },
  {
    category: "science and technology",
    lbyr: 0.011002594025522887,
    viewsType: "progessive left",
    newsType: "factual news",
    propogandaType: [
      "Obfuscation, Intentional vagueness, Confusion",
      "Misrepresentation of Someone's Position,",
    ],
    speechType: "normal",
    clickbaitType: 0.30716240406036377,
    sentiment: [{ label: "POSITIVE", score: 0.9948241710662842 }],
    impKeyWords: [],
  },
  {
    category: "business",
    lbyr: 0.013789744451075073,
    viewsType: "progessive left",
    newsType: "factual news",
    propogandaType: [
      "Exaggeration or Minimisation",
      "Misrepresentation of Someone's Position,",
    ],
    speechType: "normal",
    clickbaitType: 0.15402580797672272,
    sentiment: [
      {
        label: "POSITIVE",
        score: 0.9954454898834229,
        _id: new ObjectId("64d2c144c206adecbcb26e6a"),
      },
    ],
    impKeyWords: [],
    _id: new ObjectId("64d2c144c206adecbcb26e69"),
  },
  {
    category: "entertainment",
    lbyr: 0.01028539135143978,
    viewsType: "ambivalent right",
    newsType: "factual news",
    propogandaType: [
      "Misrepresentation of Someone's Position,",
      "Obfuscation, Intentional vagueness, Confusion",
    ],
    speechType: "offensive",
    clickbaitType: 0.37181195616722107,
    sentiment: [
      {
        label: "NEGATIVE",
        score: 0.9886958599090576,
        _id: new ObjectId("64d2c153c206adecbcb26e6d"),
      },
    ],
    impKeyWords: [],
    _id: new ObjectId("64d2c153c206adecbcb26e6c"),
  },
  {
    category: "business",
    lbyr: 0.013948748884264246,
    viewsType: "ambivalent right",
    newsType: "factual news",
    propogandaType: [
      "Obfuscation, Intentional vagueness, Confusion",
      "Loaded Language",
    ],
    speechType: "normal",
    clickbaitType: 0.37130919098854065,
    sentiment: [
      {
        label: "POSITIVE",
        score: 0.9872909188270569,
        _id: new ObjectId("64d2c160c206adecbcb26e70"),
      },
    ],
    impKeyWords: [],
    _id: new ObjectId("64d2c160c206adecbcb26e6f"),
  },
  {
    category: "entertainment",
    lbyr: 0.010457804081704323,
    viewsType: "ambivalent right",
    newsType: "misinformation or fake news",
    propogandaType: [
      "Obfuscation, Intentional vagueness, Confusion",
      "Misrepresentation of Someone's Position,",
    ],
    speechType: "offensive",
    clickbaitType: 0.3340652585029602,
    sentiment: [
      {
        label: "NEGATIVE",
        score: 0.9854822158813477,
        _id: new ObjectId("64d2c17cc206adecbcb26e73"),
      },
    ],
    impKeyWords: ["Ġcat"],
    _id: new ObjectId("64d2c17cc206adecbcb26e72"),
  },
];

const insertData = async () => {};

insertData();
