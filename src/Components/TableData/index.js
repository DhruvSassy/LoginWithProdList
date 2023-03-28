import React from "react";

import { Table } from "react-bootstrap";

const Index = (props) => {
  const { value, onChange } = props;

  return (
    <div className='container'>
    <Table responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>
      {value.map((val, key) => {
        return (
          <tbody key={key}>
            <tr>
              <td>{val.id}</td>
              <td>{val.product}</td>
              <td>{val.price}</td>
              <td>{val.qty}</td>
              <td>
                <input
                  type="number"
                  name="email"
                  size="10"
                  onChange={(event) => onChange(event, key)}
                  value={val.input}
                />
                <>
                  {val.qty < val.input && <p className="text-danger">Error</p>}
                </>
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
    </div>
  );
};

export default Index;