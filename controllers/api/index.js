const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shopsRoutes = require('./createBizRoutes');
const commentRoutes = require('./createCommentRoutes')

router.use('/users', userRoutes);
router.use('/shops', shopsRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
