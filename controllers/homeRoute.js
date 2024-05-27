const router = require("express").Router();
const { User, BlogPost } = require("../models");

// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET homepage route - show all blog posts
router.get("/", async (req, res) => {
  try {
    const blogDB = await BlogPost.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = blogDB.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render("homepage", {
      title: "The Tech Blog",
      posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//GET dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    const blogDB = await BlogPost.findAll({
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
      posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//GET login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    title: "The Tech Blog",
  });
});

//GET signup route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup", {
    title: "The Tech Blog",
  });
});

module.exports = router;
