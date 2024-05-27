const router = require('express').Router();


//
router.get('/', async (req, res) => {
    console.log(res)

    res.render('dashboard')

});



module.exports = router;
