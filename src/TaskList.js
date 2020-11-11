import Task from './Task';



const TaskList = ({ tasks }) => {

    return (
      <div className="xs20">
        {tasks.map(task => <Task  done={task.done} title={task.title} imageUrl={task.imageUrl} />)}
      
      </div>);
  };
  


  export default TaskList;