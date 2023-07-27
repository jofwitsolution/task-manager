const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongodb = require("./lib/db");
const taskRoutes = require("./routes/task");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandler);
app.use(notFound);

mongodb();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
