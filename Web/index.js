const Port = require("../config");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json()); // POST 요청 본문 파싱용 미들웨어

let Status = null;

// HTML 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/html" + "/index.html"));
});

// 상태 정보 제공
app.get('/Status', (req, res) => {
    res.json(Status); // Status 변수를 JSON으로 응답
});

// 상태 정보 업데이트 (POST)
app.post('/updateStatus', (req, res) => {
    console.log(req.body);
    Status = req.body;
    res.status(200).send("Status updated!");
});

app.listen(3000, () => {
    console.log(`${Port}번 포트에서 웹 서버를 시작합니다!`);
    console.info(`접속하기 : http://localhost:${Port}`);
});
