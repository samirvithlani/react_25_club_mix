import React, { useEffect, useRef } from 'react'

export const UseRefDemo = () => {
    const inputRef = useRef()
    useEffect(() => {
      
        inputRef.current.focus()
      
    }, [])
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>uSE REF DEMO</h1>
        <input type='text' ref={inputRef}></input>
        <input type='text'></input>
    </div>
  )
}
