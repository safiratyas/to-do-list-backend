const listsService = require("../../services/lists");

module.exports = {
  async createList(req, res) {
    try {
      const {
        name, 
        date
      } = req.body;

      console.log(req.body)
      const list = await listsService.create({
        userId: req.user.id,
        name: req.body.name,
        date: new Date(),
      })

      res.status(201).json({
        message: "Successfully created list",
        list
      })
    } catch(err) {
      res.status(400).json({
        error: err.name,
        message: err.message
      })
    }
  },

  async updateList(req, res) {
    try {
      const {
        name, 
        date
      } = req.body

      const list = await listsService.update(req.params.id, {
        name,
        date
      })

      res.status(200).json({
        status: "OK",
        message: "Successfully edited list"
      })
    } catch (err) {
      res.status(422).json({
        status: "Failed",
        message: err.message
      })
    }
  },

  async deleteList(req, res) {
    try {
      const id = req.params.id;
      const list = await listsService.getOne({
        where: {
          id
        }
      })

      const destroy = await listsService.delete(id)
      res.status(200).json({
        status: "OK",
        message: "Successfully deleted list"
      })
    } catch (err) {
      res.status(400).json({
        error: {
          name: err.name,
          message: err.message
        }
      })
    }
  },

  async getList(req, res) {
    try {
      const list = await listsService.getOne({
        where: {
          id: req.params.id
        },
      })

      if(!list) {
        throw new Error(`List with ID ${req.params.id} is not found!`)
      }

      res.status(200).json(list)
    } catch (err) {
      res.status(404).json({
        status: "Failed",
        message: err.message
      })
    }
  },

  async getAllLists(req, res) {
    const getAll = await listsService.listByCondition()

    res.status(200).json({
      status: "Success",
      data: getAll
    })
  }
}