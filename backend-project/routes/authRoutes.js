const express = require("express");
const { sayHello, generateToken, handlePostRequest } = require("../controllers/authController");

const router = express.Router();

router.get("/hello", sayHello);
router.get("/token", generateToken);
router.post("/post", handlePostRequest);

module.exports = router;
