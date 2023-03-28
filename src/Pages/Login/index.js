import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

import { Button, Input } from "../../Components/Index";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [namemsg, setNameMsg] = useState("");
  const [emailmsg, setEmailMsg] = useState("");
  const [passmsg, setPassMsg] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    nameValidation();
    emailValidation();
    passwordValidation();

    const user = { name, email, pass };
    localStorage.setItem("Name", user.name);
    localStorage.setItem("Email ID", user.email);
    localStorage.setItem("password", user.pass);
    localStorage.setItem("token", "12345");
    console.log(user);
    if (name !== "" && email !== "" && pass !== "") {
      navigate("/");
    }
    
  };

  const nameValidation = () => {
    const regExn = /^[A-Za-z][A-Za-z0-9_]{2,}$/;
    if (name === "") {
      setNameMsg("Please Enter Name");
    } else if (!regExn.test(name)) {
      setNameMsg("Please valid Name");
    } else {
      setNameMsg("");
    }
  };

  const emailValidation = () => {
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
    if (email === "") {
      setEmailMsg("Please Enter Email");
    } else if (!rgExp.test(email)) {
      setEmailMsg("Email is not Valid");
    } else {
      setEmailMsg("");
    }
  };

  const passwordValidation = () => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,6}$/;
    if (regExp === "") {
      setPassMsg("Please Enter Password");
    } else if (!regExp.test(pass)) {
      setPassMsg(
        "Password has must be Minimum four and maximum six characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setPassMsg(" ");
    }
  };

  return (
    < div className='container'>
      <Form>
        <Input
          placeholder="Enter Username"
          type="text"
          id="username"
          value={name}
          label="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <p style={{ color: "red" }}>{namemsg}</p>
        <Input
          placeholder="Enter Email Id"
          type="text"
          id="emailid"
          value={email}
          label="Useremail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={{ color: "red" }}>{emailmsg}</p>
        <Input
          placeholder="Enter Password"
          type="password"
          id="pass"
          value={pass}
          label="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <p style={{ color: "red" }}>{passmsg}</p>
        <Button onClick={submitHandler} />
      </Form>
    </ div>
  );
};

export default Login;