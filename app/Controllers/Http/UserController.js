"use strict";

class UserController {
  index({ request, response }) {
    return response.json({ msg: "usercontroller" });
  }
}

module.exports = UserController;
