import './App.css';
import TableComp from './components/TableComp';

function App() {

  var employeeList = [
    {"firstName": "pippo", "lastName":"pip", "age":22},
    {"firstName": "pluto", "lastName":"pluti", "age":35},
    {"firstName": "topolino", "lastName":"mouse", "age":31},
    {}
  ]

  return (
    <div className="App">
      <TableComp data={employeeList}/>
    </div>
  );
}

export default App;
