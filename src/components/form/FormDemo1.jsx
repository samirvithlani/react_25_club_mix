 import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const  {register,handleSubmit} = useForm()
    const [formdata, setformdata] = useState({})
    //register object -- key value.. useState
    //handleSubmit function...
    const submitHanlder = (data)=>{
        console.log(data)
        setformdata(data)
        //disptachrt("add doctor",data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE : <input type='radio' {...register("gender")} value="male"></input><br></br>
                FEMALE : <input type='radio' {...register("gender")} value="female"></input>
            </div>
            <div>
                <label>HOBBIES</label>
                <br></br> cricket :<input type='checkbox' {...register("hobbies")} value="cricket"></input>
                <br></br> chess :<input type='checkbox' {...register("hobbies")} value="chess"></input>
                <br></br> reading :<input type='checkbox' {...register("hobbies")} value="reading"></input>
            </div>
            <div>
                <select {...register("country")}>
                    <option value="India">INDIA</option>
                    <option value="Usa">USA</option>
                    <option value="Uk">UK</option>
                </select>
                
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <div>
            <h1>OUTPUT</h1>
            <h1>NAME  ={formdata.name}</h1>
        </div>
    </div>
  )
}
