const router = require('express').Router();

const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes)

module.exports = router;

