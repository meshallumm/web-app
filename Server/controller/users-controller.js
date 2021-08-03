const express = require("express");
const usersLogic = require('../logic/users-logic')
const router = express.Router();

router.get("/login", async (request, response, next) => {
    try {
      let userLoginDetails = request.body
      let successFullLoginData = await usersLogic.login(userLoginDetails);
      response.json(successFullLoginData);
    } catch (error) {
      return next(error);
    }
  })

export default router;  