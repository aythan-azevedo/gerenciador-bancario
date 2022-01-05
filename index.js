const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const registerRouter = require('./src/routers/register');
const depositRouter = require('./src/routers/deposit');
const userRouter = require('./src/routers/user');
const transferRouter = require('./src/routers/transfer');
const deleteRouter = require('./src/routers/delete');

app.use('/delete', deleteRouter);
app.use('/transfer', transferRouter);
app.use('/users', userRouter);
app.use('/register', registerRouter);
app.use('/deposit', depositRouter);

app.listen(PORT, () => console.log(`online in port ${PORT}`));

