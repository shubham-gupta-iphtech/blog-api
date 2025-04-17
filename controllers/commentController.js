const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  const { blogId, content } = req.body;
  const comment = await Comment.create({ blogId, content, userId: req.user.id });
  res.json(comment);
};

exports.getCommentsByBlog = async (req, res) => {
  const comments = await Comment.find({ blogId: req.params.blogId }).populate('userId', 'username');
  res.json(comments);
};
