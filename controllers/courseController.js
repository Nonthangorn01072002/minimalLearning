const courseService = require("../services/courseService");
const CreateCourseDto = require("../dtos/createCourseDto");
const UpdateCourseDto = require("../dtos/updateCourseDto");

async function createCourse(req, res) {
  const createData = new CreateCourseDto(req.body);
  try {
    const course = await courseService.create(createData.title, createData.description, createData.ownerId);
    res.status(201).json({
      message: "Create successful",
      course: {
        id: course._id,
        title: course.title,
        description: course.description,
      },
    });
  } catch (error) {
    res.status(400).json({ essage: error.message });
  }
}

async function findAllCourse(req, res) {
  try {
    const listCourse = await courseService.findAllCourse();
    if (!listCourse.length) {
      return res.status(200).json({
        success: true,
        message: "No courses found",
        data: [],
      });
    }
    res.status(200).json({
      success: true,
      data: listCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function updatedCourse(req, res) {
  const updateData = new UpdateCourseDto(req.body);
  try {
    const course = await courseService.update(updateData);
    res.status(200).json({
      success: true,
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function findCourse(req, res) {
  const courseId = req.params.id;
  try {
    const course = await courseService.findCourseByCourseId(courseId);
    res.status(200).json({
      success: true,
      ownerId: course.ownerId,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function deleteCourse(req, res) {
  const courseId = req.params.id;
  try {
    const course = await courseService.deleteCourse(courseId);
    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function findCourseByOwnerId(req, res) {
  const courseId = req.params.id;
  try {
    const course = await courseService.findByOwnerId(courseId);
    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  findAllCourse,
  createCourse,
  updatedCourse,
  findCourse,
  deleteCourse,
  findCourseByOwnerId,
};
