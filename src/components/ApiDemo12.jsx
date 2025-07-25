import React from 'react'
import { useFetchApi } from '../hooks/ApiCallHook'
import { Loader } from '../common/Loader'

export const ApiDemo12 = () => {
    const{data,isLoading}=useFetchApi("https://dummyjson.com/products")
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 12</h1>
        {
            isLoading && <Loader/>
        }
        {
            data.products?.map((pr)=>{
                return<li>{pr.title}</li>
            })
        }
    </div>
  )
}
