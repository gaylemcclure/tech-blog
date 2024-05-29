const router = require("express").Router();
const { User, Blog } = require("../models");


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
    const posts = blogDB.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      header_title: "The Tech Blog",
      logged_in: req.session.logged_in,
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
    header_title: "The Tech Blog",
  });
});

//GET signup route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    header_title: "The Tech Blog",
  });
});

module.exports = router;
