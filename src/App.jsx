import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import TaskCard from './TaskCard';



function App() {
  const [tasks, setTasks] = useState(null);
  const [text, setText] = useState("");
  const getTasks= async () =>{
    try{
      const data= await axios.get("http://localhost:5000/api/tasks");
      setTasks(data.data);
    } catch(error){
      console.log('Error occured...');
    }
  }

  const addTask= async (e) =>{
    e.preventDefault();
    if(!text) return;
    try{
        const data= await axios.post("http://localhost:5000/api/tasks", {"name":text});
        getTasks();
        setText("");
    } catch(error){
      console.log('Error occured...');
    }
  }

  useEffect(() => { getTasks(); }, []);

  return (
    <div className="app-container">
      <h2>Todo List</h2>
      <div>
        <form className='search-container'>
      <input className="search-bar" placeholder='Add a new task...' onChange={(e) => setText(e.target.value)} value={text}></input>
      <button className="add-task" onClick={addTask}>+</button>
        </form>
      </div>
      <div className='allTasks'>{
        tasks?.length>0? tasks.map((task) => (
          <TaskCard key={task._id} task={task} getTasks={getTasks} />
        )) : "No tasks yet. Add one above!"
        }</div>
    </div>
  )
}

export default App
