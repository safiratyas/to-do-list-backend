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

    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message
      })
    }
  },

  async login(req, res) {
    try {
      const email = req.body.email.toLowerCase()
      const password = req.body.password

      const user = await usersService.getOne({
        where: {
          email
        }
      })

      if (!user) {
        res.status(404).json({
          status: "Failed",
          message: "Email Not Found!"
        })
        return
      }

      const isPasswordCorrect = await checkPassword(password, user.password)

      if (!isPasswordCorrect) {
        res.status(401).json({
          status: "Failed",
          message: "Wrong Password!"
        })
        return
      }

      const token = createToken({
        id: user.id,
        name: user.name,
        email: user.email,
      }, process.env.JWT_PRIVATE_KEY || "Token", {
        expiresIn: "1d"
      })

      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })

    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err.message
      })
    }
  },

  async whoAmI(req, res) {
    try {
      res.status(200).json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        createdAt: req.user.createdAt,
        updatedAt: req.user.updatedAt
      })
    } catch (err) {
      res.status(404).json({
        status: "Failed",
        message: err.message
      })
    }
  },

  async getUser(req, res) {
    try {
      const user = await usersService.getOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ["password"]
        }
      })

      if(!user) {
        throw new Error(`User with ID ${req.params.id} is not found!`)
      }

      res.status(200).json(user)
    } catch (err) {
      res.status(404).json({
        status: "Failed",
        message: err.message
      })
    }
  }
}