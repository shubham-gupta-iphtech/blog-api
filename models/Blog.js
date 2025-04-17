const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category :{type: String, enum: ['generic', 'travel', 'fooding', 'educational'], default: 'generic'},
  coverImage: {type: String , default: ""},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
