const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // REST API에서는 데이터를 json형태로 주고받음
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "이상희",
      birthday: "010816",
      gender: "여자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "홍길동",
      birthday: "040227",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "이순신",
      birthday: "990105",
      gender: "여자",
      job: "직장인",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on prot ${port}`));
