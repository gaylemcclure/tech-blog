
const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/',  (req, res) => {
  try {

   Comment.create({
        text: req.body.comment,
        user_id: req.session.user_id,
        blog_id: req.body.blogId
    }).then((newComment) => {
        res.json(newComment)
    })

  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;