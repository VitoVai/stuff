class UserViewModel {
  constructor({ _id, email, role, name, surname, mainImg, images, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.name = name;
    this.surname = surname;
    this.mainImg = mainImg;
    this.images = images;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
