const router = require('express').Router();
const { Blog } = require('../../models');

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

router.put('/:id/update',  (req, res) => {

    Blog.update({
      title: req.body.title,
      text: req.body.text
    },{
  where: {
    id: req.params.id
  }}) .then((updatedPost) => {
    res.json(updatedPost)
  }).catch((err) => {
    console.error(err);
    res.json(err)
  })

});

router.delete('/:id/delete', (req, res) => {

  Blog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => res.json(err));
});





module.exports = router;
