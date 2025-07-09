import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    //var count =0
    const [count,setCount]=useState(0)
    //count -->variable name
    //setCount function -->use -->count -->change -->setCount
    //0 initiavalue --> number

    const increseCount = ()=>{
        //count++
        //count = count +1
        setCount(count+1)
        console.log(count)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <button onClick={increseCount}>INCRESE</button>
        <h1>Count = {count}</h1>
    </div>
  )
}
