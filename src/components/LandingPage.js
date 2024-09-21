import React from "react";
import Navbar from "./Navbar";
import { useRoutes } from "react-router-dom";
import { routes } from "../routes";

function LandingPage(props) {
  const element = useRoutes(routes);
  return (
    <div>
      <Navbar />
      <hr />
      <p>LandingPage</p>
      {element}
    </div>
  );
}

export default LandingPage;
