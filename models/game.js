const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Game = new Schema(
    {
        title: { type: String, required: false },
        bag: { type: Array, required: true },
        draws: { type: Array, required: true }
    },
    { timestamps: true },
);

module.exports = mongoose.model('games', Game)