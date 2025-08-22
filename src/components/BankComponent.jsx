import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { depositAction } from '../redux/BankSlice'
import { fetchContent } from '../redux/ContentSlice'

export const BankComponent = () => {
    const {register:register1,handleSubmit:handleSubmit1} = useForm()
    const {register:register2,handleSubmit:handleSubmit2} = useForm()
    const state = useSelector(state=>state)
    console.log("state",state.content)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchContent())
    },[])


    
    const depositHandler = (data)=>{
        console.log("deposit data",data)
        dispatch(depositAction(Number(data.amount)))
    }
  return (
    <div>
        <h1>BANK COMPONENT</h1>
        <div>
            <h1>DEPOSIT</h1>
            <form onSubmit={handleSubmit1(depositHandler)}>
                <div>
                    <label>AMOUNT</label>
                    <input type='text' {...register1("amount")}></input>
                </div>
                <div>
                    <input type='submit' value='DEPOSIT'></input>
                </div>
            </form>
        </div>
    </div>
  )
}
