import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle,save }) => {
  const [taskName, settaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) =>{
    const {name ,value} = e.target
    if(name ==="taskName"){
        settaskName(value);
    }else{
        setDescription(value);
    }
  }
  const handleSave = () =>{
    let taskObj ={}
    taskObj["Name"] =taskName
    taskObj["Description"] = description
    save(taskObj);
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
