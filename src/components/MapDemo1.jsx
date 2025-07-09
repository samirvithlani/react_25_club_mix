import React from 'react'
import electronics from "../assets/images/elc.png"

export const MapDemo1 = () => {
    //array

    var images =[
        {
        name:"raj",
        image:electronics
        }
    ]

    var users = [
        {
            id:1,
            name:"raj",
            age:23,
            status:true,
            gender:"male",
            salary:23000,
            image:electronics
        },
        {
            id:2,
            name:"rajvi",
            age:24,
            status:true,
            gender:"female",
            salary:32000
        },
        {
            id:3,
            name:"ajay",
            age:30,
            status:false,
            gender:"male",
            salary:45000
        },
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {/* {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        } */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Status</td>
                    <td>Salary</td>
                    <td>Gender</td>
                    <td>IMAGE</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr style={{backgroundColor:user.gender =="female"&&"pink"}}>
                            <td>{user.id}</td>
                            {/* <td style={{color:user.name.startsWith("r")?"yellow":"white"}}>{user.name}</td> */}
                            <td style={{color:user.name.startsWith("r") && "yellow"}}>{user.name}</td>
                            <td>{user.age}</td>
                            <td className={user.status == true ? "badge badge-primary":"badge badge-danger"}>{user.status == true?"Active":"Not active"}</td>
                            <td style={{backgroundColor:user.salary>40000&&"red"}}>{user.salary}</td>
                            <td>{user.gender}</td>
                            <td>
                                <img src={images.find((im)=>im.name == user.name)?.image} style={{height:40,width:50}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
