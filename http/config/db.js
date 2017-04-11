const Mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

Mongoose.connect(`mongodb://localhost/${ process.env.DB_NAME }`)
Mongoose.Promise = Promise

module.exports = Mongoose
