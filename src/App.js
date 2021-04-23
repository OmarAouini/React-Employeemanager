import './App.css';
import {Switch, Route} from "react-router-dom"
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Employees from './components/Employees'
import Login from './components/Login';
import ConfirmLogoutModal from './components/ConfirmLogoutModal';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/employees" component={Employees}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={ConfirmLogoutModal}/>
      </Switch>
    </div>
  );
}

export default App;
