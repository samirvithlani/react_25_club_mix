import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../common/Loader'
import { useFetchApi } from '../hooks/ApiCallHook'

export const ApiDemo11 = () => {
   
    const {data,isLoading} = useFetchApi("https://node5.onrender.com/user/user")

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        <h1>API DEMO 11</h1>
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
                    data.data?.map((user)=>{
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
