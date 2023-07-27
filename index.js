const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongodb = require("./lib/db");
const taskRoutes = require("./routes/task");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const rootRoute = require("./routes/root");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

//Routes
app.use("/", rootRoute);
app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandler);
app.use(notFound);
// mongo db
mongodb();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
