import React from 'react'
import TableComp from './TableComp'


const Employees = () => {

    var employeeList = [
        {"firstName": "pippo", "lastName":"pip", "age":22},
        {"firstName": "pluto", "lastName":"pluti", "age":35},
        {"firstName": "topolino", "lastName":"mouse", "age":31},
      ]
   
    return(
        <div>
            <TableComp data ={employeeList} id="employeesTable" />
        </div>
    )
}


export default Employees