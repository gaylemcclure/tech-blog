const router = require('express').Router();
const { Blog } = require('../../models');

//POST request to create a new blog post
router.post('/',  (req, res) => {
  try {
   Blog.create({
        title: req.body.title,
        text: req.body.content,
        user_id: req.session.user_id,
        
    }).then((newBlog) => {
        res.json(newBlog)
    })

  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
