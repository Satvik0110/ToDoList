import axios from "axios";
import { useState } from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const TaskCard = ({task, getTasks}) => {
  const [name, setName]= useState(task.name);
  const [done, setDone]= useState(task.completed);

  const deleteTask= async () =>{
    const data= await axios.delete(`http://localhost:5000/api/tasks/${task._id}`)
    getTasks();
    }

    const updateTask = async () =>{
      const data= await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, {"completed": !done});
      const newData = await axios.get(`http://localhost:5000/api/tasks/${task._id}`);
      setName(newData.data.name);
      setDone(newData.data.completed);
    }

  return (
    <div>
      <div className="task-div">
        <input className="checkbox" type="checkbox"  onClick={updateTask}></input>
        <div className={classNames("task-name", {completed:done})}>{name} </div>
        <button className="remove-task" onClick={deleteTask}><FontAwesomeIcon icon={faTrash} /></button> </div>
    </div>
  )
}

export default TaskCard;