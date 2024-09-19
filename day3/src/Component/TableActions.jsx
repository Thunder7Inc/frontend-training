import React, { useLayoutEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
export default function TableActions({ dispatch, setFilter, handleSort }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const searchInputRef = useRef(null);
 

  const handleClose = () => {
    setShow(false);
  };
  const hadleSubmit = () => {
    dispatch({ type: "add", name: name, description: description });

    setShow(false);
  };
  useLayoutEffect(() => {
      searchInputRef.current.focus();
    
  },[]); 

  const handleShow = () => setShow(true);
  return (
    <div className="table-action-cont">
      <div className="person-add">
        <Button variant="primary" onClick={handleShow}>
          Add Persons
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Persons</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Description"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" value={name} onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={hadleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Form.Group
          className="search-cont"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
          ref={searchInputRef}
            className="search"
            type="email"
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search"
          />
        </Form.Group>
      </div>
      <div>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSort}
        >
          <option>Sort By</option>
          <option value="name">Name</option>
          <option value="2">Description</option>
        </Form.Select>
      </div>
    </div>
  );
}
