import logo from "./logo.svg";
import "./App.css";
import CounterApp from "./components/Counter/CounterApp";
import RestApp from "./components/Rest/RestApp";
import AddUser from "./components/Rest/AddUser";
import LandingPage from "../src/components/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <CounterApp /> */}
      {/* <RestApp /> */}
      <LandingPage />
    </div>
  );
}

export default App;
