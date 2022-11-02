const usersService = require("../services/users");

module.exports = {
  async checkCondition(req, res, next) {
    const {
      name,
      email,
      password
    } = req.body

    if (!name) {
      res.status(400).json({
        status: "Failed",
        message: "Name Cannot Be Empty!"
      })
      return
    }

    if (!email) {
      res.status(400).json({
        status: "Failed",
        message: "Email Cannot Be Empty!"
      })
      return
    }

    const filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;

    if (email == "" || email.search(filter) == -1) {
      res.status(400).json({
        status: "Failed",
        message: "Wrong Email Format!"
      })
      return
    }

    const uniqueEmail = await usersService.getOne({
      where: {
        email
      }
    })

    if (uniqueEmail) {
      res.status(409).json({
        status: "Failed",
        message: "Email Already Registered!"
      })
      return
    }

    if (!password) {
      res.status(400).json({
        status: "Failed",
        message: "Password Cannot Be Empty!"
      })
      return
    }

    if (password.length < 8) {
      res.status(400).json({
        status: "Failed",
        message: "Password Must Have At Least 8 Characters!"
      })
      return
    }
    next()
  }
}