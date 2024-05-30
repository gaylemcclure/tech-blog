const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require('../utils/auth');

//GET individual blog posts by ID
router.get("/:id", withAuth, async (req, res) => {
  try {
    const blogDb = await Blog.findByPk(req.params.id, {
      //Include the user data - add username to blog
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    //GET all the comments where blog_id is same as route id
    const commentsDb = await Comment.findAll({
      where: {
        blog_id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        }
      ]
    });

    //Update to plain object data
    const blog = blogDb.get({ plain: true });
    const comments = commentsDb.map((comment) => comment.get({ plain: true }));

    //Render the blogpage - single post and comments
    res.render("blogpage", {
      header_title: "The Tech Blog",
      logged_in: req.session.logged_in,
      blog_id: blog.id,
      blog,
      comments
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
