const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/geodb', postRoutes);

module.exports = router;