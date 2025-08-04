import React, { useContext } from 'react'
import { UserSubList } from './UserSubList'
import { UserContext } from './UserContext'

export const UserList = () => {
  const {myName} = useContext(UserContext)

  return (
    <div>
      <h1>user list</h1>
      
      <h1>{myName}</h1>
      <UserSubList></UserSubList>
    </div>
  )
}
