const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

//Import the json files
const blogData = require('./blogData.json');
const userData = require('./userData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  //Create new users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Create new blogs
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  //Create new comments
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: users[Math.floor(Math.random() * 3)].id
    });
  }

  process.exit(0);
};

seedDatabase();
