const router = require('express').Router();

//Variables for the routes
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('./editDashboardRoutes')

//Define the routes
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes)
router.use('/dashboard', dashboardRoutes)

module.exports = router;

