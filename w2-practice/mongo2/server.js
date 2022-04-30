const express = require('express');
const connectdb = require('./model/connection');
const app = express();

connectdb();
app.use(express.json({ extended: false }));
app.use('/controller/userModel', require('./contoller/adduser'))
const port = process.env.PORT || 3000;

app.listen(port);