import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getApiCall = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //pendig... axios object...
        console.log(res.data) //api. response..
        //res.data.message
        setmessage(res.data.message) //message
        setusers(res.data.data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiCall()}}>GET</button>
        <h1>{message}</h1>
        <h1>USERS</h1>
        {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        }
    </div>
  )
}
