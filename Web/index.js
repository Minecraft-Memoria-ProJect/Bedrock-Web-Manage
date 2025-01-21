const Config = require("../config");
const express = require("express");

const app = express();
app.use(express.json()); // POST 요청 본문 파싱용 미들웨어

const port = Config.port;

let Status = null;
let Command = null;

// HTML 파일 제공
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/html/index.html`);
});

app.get('/log', (req, res) => {
    console.log(1)
    res.sendFile(`${__dirname}/html/logs.html`);
})

// 상태 정보 제공
app.get('/Status', (req, res) => {
    res.json(Status); // Status 변수를 JSON으로 응답
});

// 상태 정보 업데이트 (POST)
app.post('/updateStatus', (req, res) => {
    Status = req.body;
    res.status(200).send("Status updated!");
});

app.post('/runCommand', async (req, res) => {
    const { command } = req.body; // 명령어를 요청에서 가져옴

    if (!command) {
        return res.status(400).send("No command provided");
    }

    Command = command;
});

app.get('/getCommand', (req, res) => {

    res.status(200).send(Command);

    Command = null;
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 웹 서버를 시작합니다!`);
    console.info(`접속하기 : http://localhost:${port}`);
});
