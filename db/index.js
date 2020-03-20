const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/scrabblebags', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.');
      })
    .catch(e => {
        console.error('Connection error', e.message)
    })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db;