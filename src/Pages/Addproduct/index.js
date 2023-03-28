/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { Col, Form, Row } from "react-bootstrap";

import Prodlist from "../../Components/List/Prodlist";
import Header from "../../Components/Navbar/Header";
import Buttonbox from "../../Components/Productbutton/Buttonbox";
import Inputbox from "../../Components/ProductsInput/Inputbox";

//Main function
const Addproduct = () => {
  const [proddetail, setProdDetail] = useState({
    prodname: "",
    prodprice: "",
    prodqty: "",
  });
  const [addproducts, setAddProducts] = useState([]);
  const { prodname, prodprice, prodqty } = proddetail;
  const [error, setError] = useState({ product: "", price: "", qty: "" });
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  const [currentPage, setCurrentpage] = useState(1);

  //Pagination
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  // console.log("Last:",lastIndex)
  const firstIndex = lastIndex - recordsPerPage;
  // console.log("First:",firstIndex);
  let records = addproducts.slice(firstIndex, lastIndex);
  // console.log("Records:",records)
  const npage = Math.ceil(addproducts.length / recordsPerPage);
  // console.log("Npage",npage)
  const numbers = [...Array(npage + 1).keys()].slice(1);
  // console.log("Numbers:",numbers)

  //Add Product function
  const addprodHandler = (e, id) => {
    e.preventDefault();
    const isError = prodError();
    console.log("Product Name:", prodname);
    console.log("Product Price:", prodqty);
    console.log("Product Qty:", prodprice);
    if (!prodname || !prodqty || !prodprice) {
    } else if (prodname && prodprice && prodqty && !toggleSubmit) {
      setAddProducts(
        addproducts.map((val) => {
          if (val.id === isEdit) {
            return {
              ...val,
              prodname: prodname,
              prodprice: prodprice,
              prodqty: prodqty,
            };
          }

          return val;
        })
      );

      setToggleSubmit(true);
      setProdDetail({
        prodname: "",
        prodprice: "",
        prodqty: "",
      });
    } else if (!isError) {
      setAddProducts([
        { id: `${Date.now()}`, prodname, prodprice, prodqty },
        ...addproducts,
      ]);

      setProdDetail({
        prodname: "",
        prodprice: "",
        prodqty: "",
      });
    }
    console.log(addproducts);
  };

  // Edit Product function
  const editHandler = (i) => {
    const selectedprod = addproducts.find((val) => {
      return i === val.id;
    });
    setToggleSubmit(false);
    setProdDetail({
      prodname: selectedprod.prodname,
      prodprice: selectedprod.prodprice,
      prodqty: selectedprod.prodqty,
    });
    console.log(selectedprod.prodname);
    setIsEdit(i);
  };

  //Delete Product function
  const deleteHandle = (i) => {
    const delprod = addproducts.filter((id) => {
      return i !== id;
    });
    setAddProducts(delprod);

    // Delete Records List
    records = records.filter((id) => {
      return i !== id;
    });

    // setAddProducts("records:",records);
    if (!records.length) {
      setCurrentpage(numbers.length - 1);
    } else {
      setCurrentpage(currentPage);
    }
  };

  //Delete All Product function
  const delprodall = () => {
    setAddProducts([]);
  };

  // Input box error function
  const prodError = () => {
    let isError = false;

    if (prodname === "") {
      error.product = "Please Enter Product Name";
      isError = true;
    } else if (!/^[.@&]?[a-zA-Z0-9 ]+[!.@&()]?[a-zA-Z0-9!()]+/.test(prodname)) {
      error.product = "Please valid Product Name";
      isError = true;
    } else {
      error.product = "";
    }

    if (prodprice === "") {
      error.price = "Please Enter Product Price";
      isError = true;
    } else if (prodprice === 0) {
      error.price = "Please valid Product Price";
      isError = true;
    } else {
      error.price = " ";
    }

    if (prodqty === "") {
      error.qty = "Please Enter Product Quantity";
      isError = true;
    } else if (prodqty === 0) {
      error.qty = "Please valid Product Quantity";
      isError = true;
    } else {
      error.qty = " ";
    }
    setError({ ...error });
    return isError;
  };

  //Prev Button
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  //Number
  const changePageHandler = (id) => {
    setCurrentpage(id);
    console.log(id);
  };

  //Next Button
  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentpage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="page-header ">
          <h1>Add Product</h1>
        </div>
        <hr className="mb-5"></hr>
        <Form>
          <Row>
            <Col xs={7}>
              <Inputbox
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                value={prodname}
                onChange={(e) =>
                  setProdDetail({ ...proddetail, prodname: e.target.value })
                }
              />
              <p className="text-danger container">{error.product}</p>
            </Col>
            <Col>
              <Inputbox
                style={{ width: "134px" }}
                type="number"
                placeholder="Quantity"
                value={prodqty}
                onChange={(e) =>
                  setProdDetail({ ...proddetail, prodqty: e.target.value })
                }
              />
              <p className="text-danger container">{error.qty}</p>
            </Col>
            <Col>
              <Inputbox
                type="number"
                style={{ width: "134px" }}
                placeholder="Price"
                value={prodprice}
                onChange={(e) =>
                  setProdDetail({ ...proddetail, prodprice: e.target.value })
                }
              />

              <p className="text-danger">{error.price}</p>
            </Col>
            <Col>
              {toggleSubmit ? (
                <Buttonbox onClick={addprodHandler} />
              ) : (
                <button onClick={addprodHandler}>
                  <img
                    src="https://img.icons8.com/material-sharp/24/null/available-updates.png"
                    alt="update"
                  />
                </button>
              )}
            </Col>
          </Row>
        </Form>

        <div className="page-header mt-5 ">
          <h1>Product List</h1>
        </div>
        <hr className="mb-5"></hr>

        {addproducts.length === 0 ? (
          <h3 className="text-danger text-center fw-bolder">No Record Found</h3>
        ) : (
          <Prodlist
            addproducts={addproducts}
            setAddProducts={setAddProducts}
            editHandler={editHandler}
            deleteHandle={deleteHandle}
            delprodall={delprodall}
            records={records}
          />
        )}
        {addproducts.length === 0 ? (
          " "
        ) : (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {currentPage === 1 ? (
                <li className="page-item disabled">
                  <a className="page-link" href="" onClick={prevPage}>
                    Prev
                  </a>
                </li>
              ) : (
                <li className="page-item ">
                  <a
                    rel="prev"
                    className="page-link"
                    href=""
                    onClick={prevPage}
                  >
                    Prev
                  </a>
                </li>
              )}

              {numbers.map((n, i) => {
                return (
                  <li
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a
                      className="page-link"
                      onClick={() => changePageHandler(n)}
                    >
                      {n}
                    </a>
                  </li>
                );
              })}

              {numbers.length === currentPage ? (
                <li className="page-item disabled">
                  <a
                    rel="prev"
                    className="page-link"
                    href=""
                    onClick={nextPage}
                  >
                    Next
                  </a>
                </li>
              ) : (
                <li className="page-item ">
                  <a
                    rel="next"
                    className="page-link"
                    href=""
                    onClick={nextPage}
                  >
                    Next
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Addproduct;