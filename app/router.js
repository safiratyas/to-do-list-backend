const express = require("express");
const controllers = require("./controllers");
const middlewares = require("./middlewares");

const apiRouter = express.Router();

apiRouter.get("/", controllers.api.application.getRoot);

// configure and initialization swagger
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

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

apiRouter.get("/api/who-am-i",
  middlewares.userAuthorization.authorize,
  controllers.api.users.whoAmI
);

apiRouter.get("/api/users/:id",
  middlewares.userAuthorization.authorize,
  controllers.api.users.getUser
);

apiRouter.get("/api/users",
  middlewares.userAuthorization.authorize,
  controllers.api.users.getAllUsers
);

/**
 * @List Resources 
 */

 apiRouter.post("/api/lists",
 middlewares.userAuthorization.authorize,
 controllers.api.lists.createList
);

apiRouter.put("/api/lists/:id",
middlewares.userAuthorization.authorize,
controllers.api.lists.updateList
);

/**
 * @API Documentation
 */

 apiRouter.get('/documentation.json', (req, res) => res.send(swaggerDocument));
 apiRouter.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

apiRouter.use(controllers.api.application.handleNotFound);
module.exports = apiRouter;