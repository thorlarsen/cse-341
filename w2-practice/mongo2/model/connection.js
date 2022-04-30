const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rwtuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectdb = async () => {
    await mongoose.connect(uri);
    console.log('DB connected')
};

module.exports = connectdb;