// const { default: mongoose } = require("mongoose");
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

    name : { type: String, required: true },
    age: Number,
    favoriteFoods: [String]
});

const PersonModel = mongoose.model('Person', personSchema);

module.exports = PersonModel