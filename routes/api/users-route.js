const express = require("express");
const router = express.Router();
const {
  getUsernames,
  createUsername,
  updateUsername,
  deleteUsername,
} = require("../../controllers/user-controller");

router.route("/").get(getUsernames);

router.route("/").post(createUsername);

router.route("/").put(updateUsername);

router.route("/").delete(deleteUsername);

module.exports = router;
