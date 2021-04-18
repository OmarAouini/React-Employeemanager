import './App.css';
import {Switch, Route} from "react-router-dom"
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Employees from './components/Employees'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/employees" component={Employees}/>
      </Switch>
    </div>
  );
}

export default App;
