const courseRepository = require("../repositories/courseRepository");
const userRepository = require("../repositories/userRepository");
const User = require("../models/user");
const Course = require("../models/courses");

async function create(title, description, ownerId) {
  const newCourse = await courseRepository.createCourse({
    title,
    description,
    ownerId,
  });

  return newCourse;
}

async function findAllCourse() {
  const listCourse = await courseRepository.findAll();
  return listCourse;
}

async function update(newCourse) {
  const courseData = await courseRepository.finById(newCourse.id);
  if (!courseData) {
    throw new Error("Course not found");
  }
  courseData.title = newCourse.title;
  courseData.description = newCourse.description;

  const updatedCourse = await courseData.save();
  return updatedCourse;
}

async function findCourseByCourseId(courseid) {
  return await Course.findById(courseid);
}

async function deleteCourse(courseId) {
  return await courseRepository.deleteCourse(courseId);
}

async function findByOwnerId(ownerId) {
  return await courseRepository.findCourseByOwnerId(ownerId);
}

module.exports = {
  create,
  findAllCourse,
  update,
  findCourseByCourseId,
  deleteCourse,
  findByOwnerId,
};
