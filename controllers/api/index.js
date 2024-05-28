const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./createBlogRoutes')

router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', blogRoutes)

module.exports = router;

