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
  }
}