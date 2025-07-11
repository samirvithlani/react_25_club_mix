import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {
    const movieName = useParams().name
  return (
    <div style={{textAlign:"center"}}>
        <h1>PLAYING....{movieName}</h1>
    </div>
  )
}
