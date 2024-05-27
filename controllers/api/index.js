const router = require('express').Router();
const dashboardRoutes = require('./dashboardRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/dashboard', dashboardRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;

