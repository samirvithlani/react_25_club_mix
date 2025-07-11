import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    //name == vr
    //setName -->function
    //"" inital value
    const nameHandler = (event)=>{
        
        console.log(event.target.value)
        setname(event.target.value)
    }
    const submitHandler =()=>{
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <input type='color'></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>submit</button>
        </div>
        {
            isSubbmited == true &&<div style={{color:"red"}}>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h1>AGe = {age}</h1>
        </div>
        }
        
    </div>
  )
}
