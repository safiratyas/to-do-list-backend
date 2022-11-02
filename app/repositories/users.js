const {
  Users
} = require("../models");

module.exports = {
  create(inputData) {
    return Users.create(inputData)
  },

  update(id, updateData) {
    return Users.update(updateData, {
      where: {
        id
      }
    })
  },

  find(id) {
    return Users.findByPk(id)
  },

  findAll(condition) {
    return Users.findAll(condition)
  },

  findOne(key) {
    return Users.findOne(key)
  },

  getTotalUsers() {
    return Users.count()
  }
}