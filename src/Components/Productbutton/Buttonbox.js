import React from 'react';

import {Button} from 'react-bootstrap';

const Buttonbox = (props) => {
    const {onClick} = props;
  return (
    <div className='container'>
        <Button onClick={onClick} className="btn btn-info btn-sm" >+</Button>
      
    </div>
  )
}

export default Buttonbox