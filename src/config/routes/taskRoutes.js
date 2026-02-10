const express = require('express');
const router = express.Router();
const taskController = require("../controller/taskController");
router.post('/create', taskController.createTask);
router.get("/list",taskController.getTasks)
module.exports = router;