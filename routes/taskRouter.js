const express = require("express");
const { getAllTask, createTask, editTask, deleteTask } = require("../controller/taskController");

const router = express.Router();

router.get("/", getAllTask)

router.post("/create", createTask);

router.patch("/edit/:id", editTask)

router.delete("/delete/:id", deleteTask)

module.exports = router;