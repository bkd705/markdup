const Mongoose = require('../config/db')

const Markdown = Mongoose.model('Markdown', {
  owner: { type: String, default: null },
  content: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

module.exports = Markdown
