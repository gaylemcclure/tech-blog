const router = require("express").Router();
const { User, Blog } = require("../models");

// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET homepage route - show all blog posts
router.get("/", async (req, res) => {

  try {
    const blogDB = await Blog.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = blogDB.map((post) => {
      post.get({ plain: true });
    });

    res.render("dashboard", {
      title: " My Dashboard",
      logged_in: req.session.logged_in,
      posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;