const router = require('express').Router();
const { Blog } = require('../../models');

//PUT request to update a blog post
router.put('/:id',  (req, res) => {
      Blog.update({
        title: req.body.title,
        text: req.body.text
      },{
    where: {
      id: req.params.id
    }}) .then((updatedPost) => {
        console.log(updatedPost)
      res.json(updatedPost)
    }).catch((err) => {
      console.error(err);
      res.json(err)
    })
  
  });
  
  //DELETE request to remove a blog post
  router.delete('/:id', (req, res) => {
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
