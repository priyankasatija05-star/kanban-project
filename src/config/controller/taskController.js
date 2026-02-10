const taskService = require('../services/taskService');

const createTask = async (req, res) => {
  try {
    const { description, status } = req.body;

    if (!description || !status) {
      return res.status(400).json({ 
        message: "Description and Status are required fields." 
      });
    }

    const newTask = await taskService.createTask({ description, status });

    return res.status(201).json({
      message: "Task created successfully",
      data: newTask
    });

  } catch (error) {
    console.error("Error in createTask controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTask();
    
    return res.status(200).json({
      message: "Tasks fetched successfully",
      data: tasks
    });
    
  } catch (error) {
    console.error("Error in getTasks controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  createTask,
  getTasks
};