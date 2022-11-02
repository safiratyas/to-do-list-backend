module.exports = {
  getRoot(req, res) {
    res.status(200).json({
      status: "OK",
      message: "To Do List App is up and running!"
    })
  },

  handleNotFound(req, res) {
    const err = new Error("Route Not Found!")
    res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details
      }
    })
  }
}