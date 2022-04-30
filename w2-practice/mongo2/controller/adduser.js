const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastname = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;