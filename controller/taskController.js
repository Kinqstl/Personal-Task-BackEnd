const Task = require("../models/taskModel");

// ========= Controller to GET all my Task ===========
const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

// ========== Controller to CREATE/POST a New Task=============

const createTask = async (req, res) => {
  const { title, description, tag } = req.body;

  const task = await Task.create(req.body);
  res.status(201).json({message: "Task created successfully", task})
};

// ========== Controller to EDIT an existing Task============
const editTask = async (req, res) => {
    const {id} = req.params;

    const task = await Task.findOneAndUpdate({_id:id}, {...req.body});

    res.status(201).json({message: "Task Updated Successfully", task})
};

// ========== Controller to Delete a Task =============
const deleteTask = async (req, res) => {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete({_id:id});
    res.status(201).json({message: "Task Successfully Deleted"})
}




module.exports = { getAllTask, createTask, editTask, deleteTask};
