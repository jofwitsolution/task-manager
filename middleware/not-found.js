const notFound = (req, res, next) => {
  res.status(404).json({ msg: `The api ${req.url} not found.` });
};

module.exports = notFound;
