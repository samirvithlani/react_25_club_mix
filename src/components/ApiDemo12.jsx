import React from 'react'
import { useFetchApi } from '../hooks/ApiCallHook'
import { Loader } from '../common/Loader'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

//dispatch..

export const ApiDemo12 = () => {
    const{data,isLoading}=useFetchApi("https://dummyjson.com/products")
    const dispatch = useDispatch() //function
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 12</h1>
        {
            isLoading && <Loader/>
        }
        {
            data.products?.map((pr)=>{
                return<li>{pr.title}
                    <button className='btn btn-primary' onClick={()=>{dispatch(addToCart(pr))}}>ADD TO CART</button>
                </li>
            })
        }
    </div>
  )
}
