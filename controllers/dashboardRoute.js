const router = require("express").Router();
const { User, Blog } = require("../models");

// GET Dashbooard route - show all blog posts related to the logged in user
router.get("/", async (req, res) => {
  try {
    const blogDB = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    const posts = blogDB.map((post) => post.get({ plain: true }));
    //Check if there are any existing posts by current user
    let numberPosts = true;
    if (posts.length === 0) {
      numberPosts = false;
    }
    res.render("dashboard", {
      header_title: " My Dashboard",
      logged_in: req.session.logged_in,
      posts,
      posts_created: numberPosts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


//GET route to page to create a new blog post
router.get("/posts", (req, res) => {
  res.render("newPost", {
    header_title: " My Dashboard",
    logged_in: req.session.logged_in,
  });
});


//GET route to edit an individial post
router.get("/:id", async (req, res) => {
  try {
    const blogDB = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });
    const post = blogDB.get({ plain: true });
    res.render("editPost", {
      header_title: " My Dashboard",
      logged_in: req.session.logged_in,
      post
    })
    
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
