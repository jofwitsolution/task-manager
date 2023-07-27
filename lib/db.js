const mongoose = require("mongoose");

function mongodb() {
  mongoose
    .connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to mongodb."))
    .catch((error) => console.log(`Error connecting to mongodb: ${error}`));
}

module.exports = mongodb;
