import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../errors.css";

function Login(props) {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const loginfnc = (e) => {
    e.preventDefault();
    const formError = validateForm(users);
    setErrors(formError);

    if (Object.keys(formError).length === 0) {
      let details = JSON.parse(localStorage.getItem("sunlife"));
      if (details.uname == users.uname && details.email == users.email) {
        navigate("/register");
      }
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (data.uname == undefined) {
      errors.uname = "username is required..!";
      errors.email = "email is required..!";
    }
    return errors;
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={loginfnc}>
        UserName : <input type="text" name="uname" onChange={handleChange} />
        <p>{errors.uname && <span>{errors.uname}</span>}</p>
        Email : <input type="text" name="email" onChange={handleChange} />
        <p>{errors.email && <span>{errors.email}</span>}</p>
        <button className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default Login;
