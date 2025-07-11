import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayShow = () => {
    const showName = useParams().name
  return (
    <div style={{textAlign:"center"}}>
        <h1>PLAYING {showName}</h1>
    </div>
  )
}
