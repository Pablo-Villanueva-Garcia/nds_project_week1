


const Task = (props) => {
  const { done, title , imageUrl  } = props;
  return (
    <div className="xs100 mb20 flex just_SB p10">
      <label>
      <input className="" type="checkbox" checked={done}/>
      </label>
      <span className={done ? "throughline size30" : "size30"} >{title}</span>
      {imageUrl && <img className="task_img" src={imageUrl}/>}
    </div>
  )
};


  export default Task;