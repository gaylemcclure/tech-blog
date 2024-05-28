const router = require("express").Router();
const { User, Blog } = require("../models");

// GET homepage route - show all blog posts
router.get("/", async (req, res) => {

  try {

    const blogDB = await Blog.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = blogDB.map((post) => post.get({ plain: true }));

    let numberPosts = true;
    if (posts.length === 0) {
      numberPosts = false
    }

    res.render("dashboard", {
      title: " My Dashboard",
      logged_in: req.session.logged_in,
      posts,
      posts_created: numberPosts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/post", async (req, res) => {

  try {

    const blogDB = await Blog.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = blogDB.map((post) => post.get({ plain: true }));

    let numberPosts = true;
    if (posts.length === 0) {
      numberPosts = false
    }

    res.render("newPost", {
      title: " My Dashboard",
      logged_in: req.session.logged_in,
      posts,
      posts_created: numberPosts
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;