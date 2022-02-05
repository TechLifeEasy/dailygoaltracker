import "./App.css";
import { useEffect } from "react";
import { SingUp } from "./Api/user";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Onboarding from "./pages/Onboarding";
import Task from "./pages/Home";
// import Navbar from "./pages/helper/Navbar";

function App() {
  useEffect(() => {
    SingUp("zeelprajapati@gmail.com", "1232232", "zeel best");
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Task />
      {/* <Onboarding /> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
    </div>
  );
}

export default App;
