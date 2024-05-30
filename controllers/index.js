const router = require('express').Router();

//Route variables
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashboardRoutes = require('./dashboardRoute');
const blogRoutes = require('./blogRoute');

//Route directs
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;



