const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const cadastroRouter = require('./src/routers/cadastro');
const depositoRouter = require('./src/routers/deposit');

app.use('/cadastro', cadastroRouter);
app.use('/deposito', depositoRouter);

app.listen(PORT, () => console.log(`online na porta ${PORT}`));

