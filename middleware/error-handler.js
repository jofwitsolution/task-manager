const errorHandler = (err, req, res) => {
  console.log("Error occured: ", err);
  res.status(500).json({ msg: "Something failed" });
};

module.exports = errorHandler;
