const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/register");

router.post("/signup", registerUser.signup);
router.post("/login", registerUser.login);
router.delete("/:id", registerUser.deleteUser);
router.get("/", registerUser.getUsers);

module.exports = router;
