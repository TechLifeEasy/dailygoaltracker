import "./App.css";
import { useEffect } from "react";
import { SingUp } from "./Api/user";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  useEffect(() => {
    SingUp("zeelprajapati@gmail.com", "1232232", "zeel best");
  }, []);

  return (
    <div className="App">
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
}

export default App;
