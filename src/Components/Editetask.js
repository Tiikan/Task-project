import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Editetask = ({ modal, toggle, updatetask, taskObj }) => {
  const [taskName, settaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      settaskName(value);
    } else {
      setDescription(value);
    }
  };
  const handleUpdate = (e) =>{
    e.preventDefault();
    let tempObj ={}
    tempObj['Name'] = taskName
    tempObj["Description"] = description
    updatetask(tempObj)
  }
  useEffect(() =>{
    settaskName(taskObj.Name)
    setDescription(taskObj.Description)
  },[]);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                name="taskName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mt-3">Description</label>
              <textarea
                rows={5}
                className="form-control"
                value={description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Editetask;
