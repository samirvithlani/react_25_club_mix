import React from 'react'
import { Link } from 'react-router-dom'
import { CustButton } from './CustButton'

export const Movies = () => {
  return (
    <div style={{textAlign:"center",height:"400px",margin:"50px",backgroundColor:"goldenrod"}}>
      <CustButton name="movies button"></CustButton>
        <h1>MOVIES</h1>
        <div className='container'>
          <div className='row' style={{padding:"20px"}}>
            <div className='card' style={{height:"200px",width:"200px"}}>
              <h1>TITLE: Avatar</h1>
              <p>YEAR:2020</p>
              <Link to="/playcontent/Avatar" className='btn btn-primary'>WATCH</Link>
            </div>
            <div className='card' style={{height:"200px",width:"200px"}}>
              <h1>TITLE: Titanic</h1>
              <p>YEAR:1993</p>
              <Link to="/playcontent/titanic" className='btn btn-primary'>WATCH</Link>
            </div>
            <div className='card' style={{height:"200px",width:"200px"}}>
              <h1>TITLE: Chaava</h1>
              <p>YEAR:2025</p>
              <Link to="/playcontent/Chaava" className='btn btn-primary'>WATCH</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
