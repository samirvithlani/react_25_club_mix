import React from 'react'
import { CustButton } from './CustButton'

export const Home = () => {
  const homeCompFunc = ()=>{
    alert("home function .....")
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>HOME COMPONENT</h1>
        <CustButton  name ="home button" class = "btn btn-warning" funName = {homeCompFunc}></CustButton>
    </div>
  )
}
