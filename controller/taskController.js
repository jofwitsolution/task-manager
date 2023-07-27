const Task = require("../models/Task");

// @Method: POST /tasks
// @Desc: Create task
// @Access: public
const createTask = async (req, res, next) => {
  try {
    // validate
    if (!req.body.name) {
      res.status(400).json({ msg: "You must provide task name" });
      return;
    }

    // create the task
    const task = new Task({
      name: req.body.name,
    });

    await task.save();

    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};

// @Method: GET /tasks
// @Desc: Get all tasks
// @Access: public
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });

    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

// @Method: DELETE /tasks/:id
// @Desc: Delete task
// @Access: public
const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      res.status(404).json({ msg: `Task with ${taskId} not found.` });
      return;
    }

    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

// @Method: GET /tasks/:id
// @Desc: Get a single task
// @Access: public
const getTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      res.status(404).json({ msg: `Task with ${taskId} not found.` });
      return;
    }

    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

// @Method: PATCH /tasks/:id
// @Desc: Update task
// @Access: public
const updateTask = async (req, res, next) => {
  const taskData = {
    name: req.body.name,
    completed: req.body.completed,
  };

  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, taskData, {
      new: true,
    });

    if (!task) {
      res.status(404).json({ msg: `Task with ${taskId} not found.` });
      return;
    }

    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

module.exports.createTask = createTask;
module.exports.getAllTasks = getAllTasks;
module.exports.deleteTask = deleteTask;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;
