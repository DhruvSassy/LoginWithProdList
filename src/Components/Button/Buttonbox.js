import React from "react";
import { Button } from "react-bootstrap";

const Buttonbox = (props) => {
  const { onClick } = props;
  return (
    <div className='container'>
      <Button variant="primary" type="submit" onClick={onClick}>
        Submit
      </Button>
    </div>
  );
};

export default Buttonbox;