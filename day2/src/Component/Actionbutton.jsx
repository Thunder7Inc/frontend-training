import React from "react";
import Button from 'react-bootstrap/Button';

export default function ActionButton() {
  return <div>    <Button variant="primary" className="custom-btn">Edit</Button>
  <br/>
      <Button variant="danger" className="custom-btn">Delete</Button></div>;
}
