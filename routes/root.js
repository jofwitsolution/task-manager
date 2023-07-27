const express = require("express");
const path = require("path");
const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  // console.log(req.originalUrl);
  // sendWelcomeMessage({ email: "jofwitsolution@gmail.com" })
  //   .then(() => console.log("message sent"))
  //   .catch((err) => console.log(err));
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

module.exports = router;
