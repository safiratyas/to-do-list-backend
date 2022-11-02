const express = require("express");
const controllers = require("./controllers");
const middlewares = require("./middlewares");

const apiRouter = express.Router();

apiRouter.get("/", controllers.api.application.getRoot);

/**
 * @User Resources 
 */

apiRouter.post("/api/users/register",
  middlewares.usersCondition.checkCondition,
  controllers.api.users.register
);

apiRouter.post("/api/users/login",
  controllers.api.users.login
);

apiRouter.use(controllers.api.application.handleNotFound);
module.exports = apiRouter;