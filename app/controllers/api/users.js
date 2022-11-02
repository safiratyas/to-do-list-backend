const usersService = require("../../services/users");
const {
  checkPassword,
  createToken,
  hashPassword
} = require("../../plugin");

module.exports = {
  async register(req, res) {
    try {
      const password = req.body.password
      const encryptedPassword = await hashPassword(password, 10)

      const user = await usersService.create({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword
      })

      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })

    } catch(err) {
      res.status(400).json({
        status: "Failed",
        message: err.message
      })
    }
  }
}