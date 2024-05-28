const router = require("express").Router();
const { User, Blog } = require("../models");

// GET blog route - show all blog posts (same as homepage)
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
      title: "The Tech Blog",
      logged_in: req.session.logged_in,
      posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//GET individual blog posts by ID
router.get("/:id", async (req, res) => {
  try {
    const blogDb = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });


    const blog = blogDb.get({ plain: true });
    
    res.render("blogpage", {
      title: "The Tech Blog",
      logged_in: req.session.logged_in,
      blog_id: blog.id,
      blog,
    });
  } catch (err) {
    console.error(err);
  }
});



module.exports = router;
