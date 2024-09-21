import Login from "./components/Login";
import Register from "./components/Register";
import AddUser from "./components/Rest/AddUser";
import RestActions from "./components/Rest/RestActions";
import RestApp from "./components/Rest/RestApp";
import UserEdit from "./components/UserEdit";

export const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/userdetails", element: <RestActions /> },
  { path: "/adduser", element: <AddUser /> },
  { path: "/useredit/:uid", element: <UserEdit /> },
];
