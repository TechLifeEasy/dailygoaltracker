import "./App.css";
import { useEffect,useState } from "react";
// import { SingUp } from "./Api/user";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home/index";
import {UserAuthState} from './Api/user';


import { BrowserRouter as Router, Switch, Route, Link ,Routes} from "react-router-dom";

function App() {

  const [Loading, setLoading] = useState(true);



  useEffect(() => {
    
    UserAuthState().finally(()=>{

      setLoading(false);

    });

  }, []);

  if(Loading){
    return <h1>Loading</h1>
  }

 

  return (
    // <SingUp />
      <Router>

    <div className="App">

      <Routes>

        <Route  path="/signup" exact element={ <SignUp />}>
        
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
