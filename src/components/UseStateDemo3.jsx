import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const [numbers, setnumbers] = useState([1,2])
    const generateNo = ()=>{
        const randomNo = Math.floor(Math.random()*100)
        ///console.log(randomNo)
        // var x = numbers.push(randomNo)
        // console.log(x)
        // console.log(numbers)
        // setnumbers(x)

        //spread oprator...
        // var x = [...numbers,randomNo]
        // console.log(x)
        // setnumbers(x)
        setnumbers([...numbers,randomNo])
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
            numbers.map((n)=>{
                return<li>{n}</li>
            })
        }
        <button onClick={()=>{generateNo()}}>GENERATE</button>
    </div>
  )
}
