import React from 'react'
import { useSelector } from 'react-redux'

export const SelectedUsers = () => {
    const state = useSelector(state=>state)
    //state.user.users.map()
  return (
    <div>SelectedUsers</div>
  )
}
