const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashboardRoutes = require('./dashboardRoute');
const blogRoutes = require('./blogRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;



