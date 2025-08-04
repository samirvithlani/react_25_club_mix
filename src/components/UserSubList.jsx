import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const UserSubList = () => {
  const {myName,color,callMe } = useContext(UserContext)
  return (
    <div>
      <h1>SUB USER LIST</h1>
      <h5>{myName}</h5>
      {color}
      <button onClick={()=>{callMe()}}>CALL</button>
    </div>
  )
}
