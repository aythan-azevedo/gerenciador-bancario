const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const usersRouter = require('./src/routers/user');

app.use('/user', usersRouter);

app.listen(PORT, () => console.log(`online na porta ${PORT}`));

