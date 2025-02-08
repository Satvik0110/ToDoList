const express=require('express');
const Router=express.Router();
const {getAllTasks, postTask, deleteTask,patchTask, getTask} = require('../controllers/tasks.cjs');

Router.route('/tasks').get(getAllTasks).post(postTask);
Router.route('/tasks/:id').delete(deleteTask).patch(patchTask).get(getTask);

module.exports= Router;