const fs = require("fs"); // 파일 읽어올 수 있도록 하는 라이브러리
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // REST API에서는 데이터를 json형태로 주고받음
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json"); // database.json 파일을 읽어올 수 있도록
const conf = JSON.parse(data); //해당 데이터를 파싱해서 가져올 수 있도록
const mysql = require("mysql"); // mysql 라이브러리 불러와서 mysql변수에 담을 수 있게

// 연결과 관련한 변수 설정
// 아래 변수는 내부적으로 속성값을 입력받아 실제 mysql과 연결한 연결객체 우리가 다룰 수 있도록 함
const connection = mysql.createConnection({
  host: conf.host, // database.json에 명시된 host 그대로 가져옴
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
}); // 파일로부터 읽어서 이러한 환경설정으로 연결객체를 초기화
connection.connect(); // 연결 수행

app.get("/api/customers", (req, res) => {
  // 데이터베이스 접속해서 쿼리 날림
  connection.query(
    "SELECT * FROM CUSTOMER",
    // 가져온 데이터는 rows 매개변수에 처리할 수 있음(모든 고객 데이터가 있다)
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.listen(port, () => console.log(`Listening on prot ${port}`));
