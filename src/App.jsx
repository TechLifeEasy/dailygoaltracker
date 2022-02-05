import "./App.css";
import { useEffect } from "react";
import { SingUp } from "./Api/user";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route, Link ,Routes} from "react-router-dom";

function App() {
  // useEffect(() => {
  //   SingUp("zeelprajapati@gmail.com", "1232232", "zeel best");
  // }, []);

  return (
    // <SingUp />
      <Router>

    <div className="App">

      <Routes>

        <Route  path="/signup" exact element={ <SingUp />}>
        
        </Route>
        <Route path="/login" exact element={ <LogIn />}>
         
        </Route>
        <Route path="/" exact element={ <Home />}>
          
        </Route>
      </Routes>
    </div>
      </Router>
  );
}

export default App;
