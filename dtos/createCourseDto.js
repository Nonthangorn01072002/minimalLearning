class CreateCourseDto {
  constructor({ title, description, ownerId }) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
  }
}

module.exports = CreateCourseDto;
