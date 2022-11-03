const {
    Lists
  } = require("../models");
  
  module.exports = {
    create(inputData) {
      return Lists.create(inputData)
    },
  
    update(id, updateData) {
      return Lists.update(updateData, {
        where: {
          id
        }
      })
    },

    delete(id) {
      return Lists.destroy({
        where: {
          id
        }
      });
    },
  
    find(id) {
      return Lists.findByPk(id)
    },
  
    findAll(condition) {
      return Lists.findAll(condition)
    },
  
    findOne(key) {
      return Lists.findOne(key)
    },
  
    getTotalLists() {
      return Lists.count()
    }
  }