import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import TableData from "../../Components/TableData";
import Total from "../../Components/Card/Customcard";
import { StockData } from "../../Data";
import Header from "../../Components/Navbar/Header";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stockData, setNum] = useState(StockData);
  const [inputData, setData] = useState([]);
  const [btnDis, setBtnDis] = useState(false);
  const [ans, setAns] = useState(0);
  


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("*");
    }
  }, [navigate]);

  const incnum = (event, index, key) => {
    stockData[index].input = event.target.value;
    setNum([...stockData]);
  };

  const addHandler = (index) => {
    inputData.push(stockData[index]);
    setData([...inputData]);
  };

  useEffect(() => {
    const data = stockData.filter((val) => val.qty < val.input);
    if (data.length !== 0) {
      setBtnDis(true);
    } else {
      setBtnDis(false);
    }
  }, [stockData]);

  const totalHandnler = () => {
    let total = 0;
    stockData.map((val) => {
      return total += val.price * val.input;
    });
    console.log(total);
    setAns(total);
  };

  console.log(inputData);
  return (
    <>
    <Header />
      <div className='container mt-5'>
              <TableData value={stockData} onClick={addHandler} onChange={incnum}  />
      <button
        type="button"
        className="btn btn-primary"
        value={stockData}
        disabled={btnDis}
        onClick={totalHandnler}
      >
        Calculate
      </button>
      <Total total={ans} />
      </div>
    </>
  );
};

export default Dashboard;