const router = require('express').Router();
const { Blog } = require('../../models');


//Editing a post
//Deleting a post


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

// router.get('/:id', async (req, res) => {
//   try {

//     const blogDB = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["id", "username"],
//         },
//       ],
//     });

//     const posts = blogDB.map((post) => post.get({ plain: true }));



//     res.render("newPost", {
//       header_title: " My Dashboard",
//       logged_in: req.session.logged_in,
//       posts,

//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// })

router.put('/:id/update',  (req, res) => {

  console.log(req)

  //   Blog.update({
  //     header_title: req.body.title,
  //     text: req.body.text
  //   },{
  // where: {
  //   id: req.params.id
  // }}) .then((updatedPost) => {
  //   res.json(updatedPost)
  // }).catch((err) => {
  //   console.error(err);
  //   res.json(err)
  // })

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
