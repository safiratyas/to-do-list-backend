const listsRepository = require("../repositories/lists");

module.exports = {
  create(requestBody) {
    return listsRepository.create(requestBody)
  },

  update(id, requestBody) {
    return listsRepository.update(id, requestBody)
  },

  delete(id) {
    return listsRepository.delete(id);
  },

  async listByCondition(condition) {
    try {
      const users = await listsRepository.findAll(condition)
      const usersCount = await listsRepository.getTotalUsers()

      return {
        data: users,
        count: usersCount
      }
    } catch (err) {
      throw err
    }
  },

  get(id) {
    return listsRepository.find(id)
  },

  getOne(key) {
    return listsRepository.findOne(key)
  }
}