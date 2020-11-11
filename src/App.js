import React from 'react';
import './App.css';
import './estructura.css';
import TaskCounter from './Taskcounter';
import TaskList from './TaskList';
import data from './Tasks.json';
import Alertlimit from './Alertlimit';



const getTasks = (tasks, page, pageSize) =>  tasks.slice(page * pageSize, (page + 1) * pageSize);


function App() {


const unfilteredTasks = data.tasks;
  const amountOfTasks = unfilteredTasks.length;
  const [page, setPage] = React.useState(0);
  const pageSize = 10; 
  const pages = Math.ceil(amountOfTasks / 10);
  const tasks = getTasks(unfilteredTasks, page, pageSize);
  
   return (
  <div className="flex just_center mt20 mb20">
      <div className="centrado relativo flex_dir_col ali_center">
      <div class="absoluto alert">
      <Alertlimit tasks={tasks} />

      </div>
      <div>
        <h1>Inserte nuevas tareas</h1>
        
    
          
          <input
            id="new-todo"
            
          />
          <button>
            Añadir 
          </button>
       
      </div>
      <h1>Lista de tareas</h1>
      <TaskList tasks={tasks} />

      <div className="xs100 flex just_SB mt20">
        
        <TaskCounter  tasks={tasks} />
        
        <div className="m20 l20 just_center flex">
          <a href="http://localhost:3000/">Ver mas</a>
        </div>
        <div className="flex just_SB xs100 m30 l35 ali_center">
          Esta es la página {page+1} de {pages}
          {page > 0 && <button onClick={() => setPage(page - 1)}>Página Previa</button>}
          {page < pages && <button onClick={() => setPage(page + 1)}>Nueva Página</button>}
        </div>
        
      </div>
      <div className="xs100 flex mt20">
      <TaskCounter  tasks={unfilteredTasks} />
      </div>
      
      </div>
  </div>
  );
}
export default App;
