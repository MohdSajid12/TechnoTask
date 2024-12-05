const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Task = require("../models/Task");

const router = express.Router();

// Get all tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

// Get task by ID
router.get("/:id", authMiddleware, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
  if (!task) return res.status(404).json({ message: "Task not found." });
  res.json(task);
});

// Create task
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, priority } = req.body;

  try {
    const task = new Task({ title, description, priority, userId: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// Update task
router.put("/:id", authMiddleware, async (req, res) => {
  const { title, description, status, priority } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { title, description, status, priority },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// Delete task
router.delete("/:id", authMiddleware, async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!task) return res.status(404).json({ message: "Task not found." });
  res.json({ message: "Task deleted successfully." });
});

module.exports = router;
