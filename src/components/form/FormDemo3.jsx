import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }
    const validationSchema = {
        mobileValidation:{
            required:{
                value:true,
                message:"contact is required..."
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid mobile no"
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required8"
            },
            validate:(value)=>{
                return value == "india" || "ref code must be india"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <div>
                <label>CONTACT no</label>
                <input type='text' {...register("contact",validationSchema.mobileValidation)}></input>
                {
                    errors.contact?.message
                }
            </div>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {
                    errors.refcode?.message
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
