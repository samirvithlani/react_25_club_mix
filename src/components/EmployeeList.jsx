import React from 'react'

//props ==>
//props ={}
//{conpnayName:"TCS"}    
//{....,emps:[]}
//{...,testEmp:testEmp}
export const EmployeeList = (props) => {
  return (
    <div>
        <h1>EMPLOYEE LIST</h1>
        {props.compnayName}
        {
            props.emps.map((emp)=>{
                return <li>{emp.name} <button onClick={()=>{props.getName(emp.name)}}>{emp.name}</button></li>
            })
        }
        <button onClick={props.testEmp}>test</button>
        <button onClick={()=>{props.testEmp()}}>TEST</button>
    </div>
  )
}
