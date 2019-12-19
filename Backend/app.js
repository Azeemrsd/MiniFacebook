const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/posts", (req, res, next) => {
  const posts = [
    {
      id: "gwadfxq6",
      title: "This is the title one",
      content: "This is the content of the post one"
    },
    {
      id: "ahbws33",
      title: "This is the title Two",
      content: "This is the content of the post Two"
    }
  ];
  res.status(200).json({
    message: "Ststus ok! post fetch successfully!",
    posts
  });
});
module.exports = app;
