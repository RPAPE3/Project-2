const router = require('express').Router();
const userRoutes = require('./userRoutes');
const shopsRoutes = require('./shopsRoutes');

router.use('/users', userRoutes);
router.use('/shops', shopsRoutes);

module.exports = router;
