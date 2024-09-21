import React from "react";
import RestActions from "./RestActions";
import AddUser from "./AddUser";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

function RestApp(props) {
  return (
    <div>
      <RestActions />
      <hr />
      <AddUser />
    </div>
  );
}

export default RestApp;
