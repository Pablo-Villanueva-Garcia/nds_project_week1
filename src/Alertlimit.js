
const Alertlimit = ({tasks}) =>{
    const amountOfNotDone = tasks.filter(task => !task.done).length;
    const tasklimitthatanotfinish = 5;
    if (amountOfNotDone>=tasklimitthatanotfinish){
      return <div className="Alertlimit">Se te acumula el trabajo!</div>
    }
    return null;
  }

  
  export default Alertlimit;