const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// JSON 형태의 body를 받기위해 사용
app.use(bodyParser.json());

app.post("/", (req, res) => {
  let body = req.body;

  if (body.age == "준혁") {
    res.end("준혁님 안녕하세요");
  } else {
    res.end("누구시죠?");
  }
});

app.listen(3000, () => {
  console.log("Connected at 3000");
});
