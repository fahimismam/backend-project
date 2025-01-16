const jwt = require("jsonwebtoken");

const sayHello = (req, res) => {
  res.send("Hello World");
};

const generateToken = (req, res) => {
  const token = jwt.sign({ id: 1, username: "testUser" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

const handlePostRequest = (req, res) => {
  res.send("I am post body");
};

module.exports = {
  sayHello,
  generateToken,
  handlePostRequest,
};
