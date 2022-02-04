
import './App.css';
import {useEffect} from 'react';
import {SingUp} from './Api/user'

function App() {

  useEffect(()=>{

    SingUp('zeelprajapati@gmail.com','1232232','zeel best');
  },[])

  return (
    <div className="App">
    Start
    </div>
  );
}

export default App;
