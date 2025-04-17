const router = require('express').Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  createBlog, getAllBlogs, getSingleBlog,
  updateBlog, deleteBlog, likeBlog
} = require('../controllers/blogController');

router.get('/', getAllBlogs);
router.get('/:id', getSingleBlog);
router.post('/', auth, upload.single('coverImage'),createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);
router.post('/:id/like', auth, likeBlog);

module.exports = router;
