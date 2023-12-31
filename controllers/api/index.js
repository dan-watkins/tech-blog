const router = require("express").Router();
const blogRoutes = require("./blogRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/blog", blogRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
