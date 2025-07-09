import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[isLoading,setIsLoading]=useState(true)
    //isLoadin -->variable
    //set... -->setter function
    //true inital state
    const stopLoader = (x)=>{
        setIsLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            isLoading == true && <h1>Loading...</h1>
        }
        <button onClick={stopLoader}>stop</button>
        <button onClick={()=>{stopLoader(100)}}>stop</button>
        <button onClick={()=>{setIsLoading(false)}}>STOP</button>
    </div>
  )
}
