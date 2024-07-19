const express = require("express");
const router = express.Router();
const { getTask, postTask } = require("../services/taskService");

router.get("/task", (req, res) => {
  const Json = getTask();
  return res.status(200).json(Json);
});

router.post("/task", (req, res) => {
  const body = req.body;
  return res.status(201).json(body);
});

module.exports = router;
