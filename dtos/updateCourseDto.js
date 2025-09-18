class UpdateCourseDto {
  constructor({ id ,title, description, ownerId }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
  }
}

module.exports = UpdateCourseDto;
