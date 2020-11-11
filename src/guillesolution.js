import React from 'react';
import './App.css';
import data from './tasks.json';
/*
  - X "task.who" además de nombre, que contenga la foto de la persona
  - X Overwork warning: Añadir un aviso si tenemos más de 5 tareas por hacer
  - X "Paginación estática": tasks va a ser una lista larga y tendremos una variable
      para controlar qué tareas vemos.
 */
const Task = ({ done, title, imageUrl }) => {
  return (<div className="Task">
      <input type="checkbox" checked={done}/>
      <span className="TaskText">{title}</span>
      {/* https://reactjs.org/docs/conditional-rendering.html */}
      {imageUrl && <img className="TaskAvatar" src={imageUrl}/>}
    </div>);
};
const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <div>No tasks in this page</div>;
  }
  return (
    <div>
      {tasks.map(task => <Task done={task.done} title={task.title} imageUrl={task.imageUrl}  />)}
    </div>);
};
const Warning = ({tasks}) => {
  const amountOfNotDone = tasks.filter(task => !task.done).length;
  const overworkThreshold = 5;
  if (amountOfNotDone > overworkThreshold){
    return <div className="Warning">Cuidado tienes mucho trabajo!</div>;
  }
  return null;
}
const TaskCounter = ({ tasks }) => {
  const amountOfNotDone = tasks.filter(task => !task.done).length;
  return (
    <div>
      {amountOfNotDone} tasks left of {tasks.length}
    </div>);
}
const getTasks = (tasks, page, pageSize) => tasks.slice(page * pageSize, (page + 1) * pageSize);
function App() {
  /*
    Si la cantidad de tareas not done supera este número
    queremos mostrar un aviso.
   */
  const overworkThreshold = 5;
  const unfilteredTasks = data.tasks;
  const amountOfTasks = unfilteredTasks.length;
  const [page, setPage] = React.useState(0);
  const pageSize = 7; // Add react useState here! debería ser controlado con un input!
  const pages = Math.ceil(amountOfTasks / 10);
  const tasks = getTasks(unfilteredTasks, page, pageSize);
  return (<div>
      <h1>Todo List</h1>
      <Warning tasks={tasks} />
      <TaskList tasks={tasks} />
      <div>
        <TaskCounter tasks={tasks} />
        <div>
          Load more
        </div>
        <div>
          Seeing page {page} of {pages}
        </div>
      </div>
      {page > 0 && <button onClick={() => setPage(page - 1)}>Prev Page</button>}
      {page < pages && <button onClick={() => setPage(page + 1)}>Next Page</button>}
    </div>
  );
}
export default App;