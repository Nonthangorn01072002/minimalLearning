const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const courseController = require("../controllers/courseController");

router.post("/auth/login", authController.login);
router.post("/auth/register", userController.register);
router.post("/auth/logout", authController.logout);

router.post("/course", courseController.createCourse);
router.get("/course", courseController.findAllCourse);
router.post("/course/update", courseController.updatedCourse);
router.get("/course/:id", courseController.findCourse);
router.get("/course/u/:id", courseController.findCourseByOwnerId)
router.delete("/course/:id", courseController.deleteCourse);

module.exports = router;
