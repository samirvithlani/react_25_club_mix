import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DebouceSearch = () => {
    const [query, setquery] = useState("")
    const [deboucedQuery, setdeboucedQuery] = useState(query)
    const [result, setresult] = useState([])

    useEffect(() => {
        const handler = setTimeout(() => {
            setdeboucedQuery(query)
        }, 500);
        return ()=>{
            clearTimeout(handler)
        }
    }, [query])

    useEffect(() => {
      
        if(deboucedQuery.trim() === "") return;
        const fetchData = async()=>{
            const res = await axios.get("https://node5.onrender.com/user/filter?name="+deboucedQuery)
            console.log(res.data.data)
            setresult(res.data.data)
        }
        fetchData()
      
    }, [deboucedQuery])
    
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>DEBOUCE SEARCH</h1>
        <input type='text' onChange={(event)=>{setquery(event.target.value)}} value={query}></input>
    </div>
  )
}
