const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let logs = [];

app.post('/log', (req, res) => {
    const log = { timestamp: req.body.timestamp };
    console.log(`new post arrived ${log.timestamp}`);
    logs.push(log);
    res.status(201).send(log);
});

app.get('/logs', (req, res) => {
    console.log("new GET arrived");
    res.send(logs);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${port}`);
});
