import React from "react";

import { Col, Form, Row } from "react-bootstrap";

const Inputbox = (props) => {
  const { type, placeholder, value, onChange, style } = props;
  return (
    <div className='container'>
      <Form>
        <Row>
          <Col>
            <Form.Control
              style={style}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Inputbox;