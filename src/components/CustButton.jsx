import React from 'react'

export const CustButton = (props) => {
    const test = ()=>{

        alert(`please create funciton in component and pass as prop key will be [funName]`)
    
    }
  return (
    <button onClick={()=>{(props.funName && props.funName())|| props.funName == undefined && test()}} className={props.class || "btn btn-primary"}>{props.name || "test"}</button>
  )
}
