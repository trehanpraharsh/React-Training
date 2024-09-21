import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersEdited } from "../redux/restSlice";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataLength = useSelector((state) => state.rest.entities.length);
  const { uid } = useParams();

  const editUser = (e) => {
    e.preventDefault();
    dispatch(usersEdited({ id: uid, name, email }));
    setName("");
    setEmail("");
    navigate("/userdetails");
  };

  return (
    <div>
      <p>UserEdit : {uid}</p>
      <form onSubmit={editUser}>
        Username:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default UserEdit;
