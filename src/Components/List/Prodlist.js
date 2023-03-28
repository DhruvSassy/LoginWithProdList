/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Table } from "react-bootstrap";

const Prodlist = (props) => {
  const { addproducts, editHandler, deleteHandle, delprodall,records } = props;
  const [searchInput, setSearchInput] = useState("");

 
  // console.log(addproducts.filter(addproducts=>addproducts.prodname.toLowerCase().includes("ab")));

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>

      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        {records
          .filter((addproducts) =>
            addproducts.prodname.toLowerCase().includes(searchInput)
          )
          .map((val) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td key={val.id}>{val.id}</td>
                    <td>{val.prodname}</td>
                    <td>{val.prodqty}</td>
                    <td>{val.prodprice}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-primary me-3"
                        onClick={() => editHandler(val.id)}
                      >
                        <img
                          src="https://img.icons8.com/material-outlined/24/null/edit--v1.png"
                          alt=""
                        />
                      </button>

                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          deleteHandle(val);
                          // { recordsPerPage > 1 ? setCurrentpage(currentPage) : setCurrentpage(numbers.length-1)}
                          // if (recordsPerPage  == 1) {
                          //   setCurrentpage( currentPage);
                          //   console.log(currentPage);
                          // } else if (recordsPerPage == 0) {
                          //   setCurrentpage(numbers.length - 1);
                          //   console.log("CUr", currentPage);
                          // }
                        }}
                      >
                        <img
                          src="https://img.icons8.com/material-rounded/24/null/filled-trash.png"
                          alt=""
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
      </Table>
      <center>
        {addproducts.length >= 2 && (
          <button
            type="button"
            className="btn btn-outline-danger text-md-center mt-5"
            onClick={delprodall}
          >
            <img
              src="https://img.icons8.com/material-rounded/24/null/filled-trash.png"
              alt=""
            />{" "}
            RemoveAll
          </button>
        )}
      </center>
     
    </div>
  );
};

export default Prodlist;