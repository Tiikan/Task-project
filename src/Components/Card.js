import React, { useState } from "react";
import Editetask from "./Editetask";
const Card = ({ taskObj, index ,deleteTask ,  updateListArray}) => {
  const [modal ,setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#F0E68C",
      
    },
    {
      primaryColor: "#7FFFD4",
      
    },
    {
      primaryColor: "#DB7093",
      
    },
    {
      primaryColor: "#FF7F50",
      
    },
    {
      primaryColor: "#EE82EE",
      
    },
  ];
  const toggle =()=>{
    setModal(!modal);
  }
  const updateTask = (obj) =>{
    updateListArray(obj , index)
  }
  const handleDelete =()=>{
    deleteTask(index)
  }
  return (
    <div class="card-wrapper mr-5" style={{ "background-color": colors[index % 5].primaryColor }}>
      <div
        class="card-top"
      >
        {" "}
      </div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": "#E3E4E2",
            "border-redius": "5px",
          }}
        >
          {taskObj.Name}
        </span>
        <span className="mt-2 item-stars">{taskObj.Description}</span>
        <p>{taskObj.description}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit "
            style={{
              color : "DarkBlue",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={()=>setModal(true)}></i>
          <i
            class="far fa-trash-alt"
            style={{
              color: "Crimson",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <Editetask modal={modal} toggle={toggle} updatetask ={updateTask} taskObj={taskObj}/>
    </div>
  );
};

export default Card;
