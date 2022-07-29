const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shopsRoutes = require('./shopsRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/shops', shopsRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
