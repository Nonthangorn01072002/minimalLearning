const Course = require("../models/courses");

async function createCourse(courseData) {
  const course = new Course(courseData);
  return await course.save();
}

async function findCourseByOwnerId(ownerId) {
  return await Course.find({ ownerId });
}

async function deleteCourse(courseId) {
  return await Course.findByIdAndDelete(courseId);
}

async function findAll() {
  return await Course.find();
}

async function finById(courseId) {
  return await Course.findById(courseId);
}

module.exports = {
  createCourse,
  findCourseByOwnerId,
  deleteCourse,
  findAll,
  finById,
};
