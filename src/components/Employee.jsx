import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {

    var compnayName = "TCS"
    const [employees, setemployees] = useState([
        {
            id:101,
            name:"raj",
            salary:20000
        },
        {
            id:102,
            name:"jay",
            salary:30000
        },
        {
            id:103,
            name:"parth",
            salary:40000
        },
    ])
    const testEmp = ()=>{
        alert("test emp called...")
    }
    const getName = (name)=>{
        alert(`Name = ${name}`)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE COMPONENET</h1>

        <EmployeeList compnayName = {compnayName} emps = {employees} testEmp = {testEmp} getName = {getName}></EmployeeList>
    </div>
  )
}
