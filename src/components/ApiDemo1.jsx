import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../common/Loader'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const getApiCall = async()=>{

        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //pendig... axios object...
        console.log(res.data) //api. response..
        //res.data.message
        setmessage(res.data.message) //message
        setusers(res.data.data)
        setisLoading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiCall()}}>GET</button>
        <h1>{message}</h1>
        <h1>USERS</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>AGE</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
