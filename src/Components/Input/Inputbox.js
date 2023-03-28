import React from "react";

import { Form, InputGroup, Col } from "react-bootstrap";

const Inputbox = (props) => {
  const { type, id, name, value, placeholder, onChange, controlId, label } =
    props;
    
  return (
    <div className='container mt-5'>
    <Form.Group as={Col} md="12" className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          aria-describedby="inputGroupPrepend"
          required
        />
      </InputGroup>
    </Form.Group>
    </div>
  );
};

export default Inputbox;