const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content, category, shortDesc } = req.body;
  const coverImage = req.file?.path || "";

  const blog = await Blog.create({
    title,
    content,
    category,
    shortDesc,
    author: req.user.id,
    coverImage
  });
  res.status(200).json(blog);
};

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'username');
  res.status(200).json(blogs);
};

exports.getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author', 'username');
  res.status(200).json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Deleted' });
};

exports.likeBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  const userId = req.user.id;

  const alreadyLiked = blog.likes.includes(userId);
  if (alreadyLiked) {
    blog.likes.pull(userId);
  } else {
    blog.likes.push(userId);
  }
  await blog.save();
  res.status(200).json(blog);
};
