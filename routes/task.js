const express = require("express");
const {
  createTask,
  getAllTasks,
  deleteTask,
  getTask,
  updateTask,
} = require("../controller/taskController");

const router = express.Router();

router.route("/").post(createTask).get(getAllTasks);
router.route("/:id").delete(deleteTask).get(getTask).patch(updateTask);

module.exports = router;
