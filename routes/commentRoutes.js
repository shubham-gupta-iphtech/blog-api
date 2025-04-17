const router = require('express').Router();
const auth = require('../middleware/auth');
const { addComment, getCommentsByBlog } = require('../controllers/commentController');

router.post('/', auth, addComment);
router.get('/:blogId', getCommentsByBlog);

module.exports = router;
