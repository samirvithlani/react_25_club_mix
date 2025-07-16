import React from 'react'

export const Table = (props) => {
    //props.header
    //props.data
    console.log(Object.values(props.data[0]))
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    {
                        props.header.map((head)=>{
                            return <th>{head}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {
                        props.data.map((row)=>{
                            return <tr>
                               {
                                Object.values(row).map((d)=>{
                                    return <td>{d}</td>
                                })
                               }
                            </tr>
                        })
                    }
            </tbody>
        </table>
    </div>
  )
}
