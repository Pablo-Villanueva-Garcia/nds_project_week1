

const TaskCounter = ({ tasks }) => {
  
    const amountOfNotDone = tasks.filter(task => !task.done).length;
    return (
      <div class="xs100 m30 l30">
        {amountOfNotDone} tareas pendientes de {tasks.length}
      </div>);
  }


export default TaskCounter;