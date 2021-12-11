const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const cadastroRouter = require('./src/routers/cadastro');

app.use('/cadastro', cadastroRouter);

app.listen(PORT, () => console.log(`online na porta ${PORT}`));

