const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

const blogData = require("./blogData.json");
const userData = require("./userData.json");
const commentData = require("./commentData.json");

const seedDB = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      
    });
  };
  const blogs = await Blog.findAll();
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blog_id: blogs[Math.floor(Math.random() * blogs.length)].id,
    });
  };

  process.exit(0);
};

seedDB();
