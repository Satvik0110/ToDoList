const Task= require('../models/Task.cjs');

const getAllTasks= async (req,res) =>{
  try {
    const tasks= await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({msg:`Something went wrong, please try again...`});
  }
}

const postTask= async (req,res) =>{
  try {
    const {name, completed} = req.body;
    const task= await Task.create(req.body)
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({msg:`Something went wrong, please try again...`});
  }
}

const deleteTask= async (req,res) =>{
  try {
    const {id:TaskID} = req.params;
    const task= await Task.findOneAndDelete({_id:TaskID})
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg:`Something went wrong, please try again...`});
  }
}

const getTask= async (req,res) =>{
  try {
    const {id:TaskID} = req.params;
    const task= await Task.findOne({_id:TaskID})
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg:`Something went wrong, please try again...`});
  }
}

const patchTask= async (req,res) =>{
  try {
    const {id:TaskID} = req.params;
    const task= await Task.findOneAndUpdate({_id:TaskID}, req.body, {
      runValidators:true,
      new:true,
    })
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({msg:`Something went wrong, please try again...`});
  }
}


module.exports={getAllTasks, postTask, deleteTask, patchTask, getTask}