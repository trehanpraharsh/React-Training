import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userDeleted } from "../../redux/restSlice";
import { Link } from "react-router-dom";

function RestActions(props) {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.rest.entities);

  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   });

  // function deleteFnc(id) {
  //   delete usersData[id - 1];
  // }

  return (
    <div>
      <p>Users Data!</p>
      <button onClick={() => dispatch(fetchUsers())}>Load Users</button>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((data) => (
              <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <button onClick={() => dispatch(userDeleted(data.id))}>
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/useredit/${data.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RestActions;
