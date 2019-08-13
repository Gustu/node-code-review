var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:21555/posts')

const postSchema = new mongoose.Schema({
  title: String,
  key: String,
  description: String,
});

module.exports = mongoose.model('Post', postSchema);
