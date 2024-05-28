const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

