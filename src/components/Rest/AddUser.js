import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersAdded } from "../../redux/restSlice";
import { useNavigate } from "react-router-dom";

function AddUser(props) {
  const [name, setName] = useState("");
  //   const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataLength = useSelector((state) => state.rest.entities.length);

  const addUSer = (e) => {
    e.preventDefault();
    // setUsers([...users, { name, email }]);
    dispatch(usersAdded({ id: dataLength + 1, name, email }));
    setName("");
    setEmail("");
    navigate("/userdetails");
  };

  return (
    <div>
      {/* <div>
        <p>Users Data!</p>
        {users.map((data) => (
          <div>
            {data.name} ------- {data.email}
          </div>
        ))}
      </div> */}

      <form onSubmit={addUSer}>
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

export default AddUser;
