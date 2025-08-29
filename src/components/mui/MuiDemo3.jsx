import { Box, Typography } from '@mui/material'
import React from 'react'
import { useFetchApi } from '../../hooks/ApiCallHook'
import { DataGrid } from '@mui/x-data-grid'

export const MuiDemo3 = () => {
    const columns = [
        {
            field:"_id",
            headerName:"ID",
        },
        {
            field:"name",
            headerName:"Name",
        },
        {
            field:"email",
            headerName:"Email",
        },
        {
            field:"age",
            headerName:"Age",
        },
        {
            field:"password",
            headerName:"Password",
        }
    ]
    const {data,isLoading}=useFetchApi("https://node5.onrender.com/user/user")
  return (
    <Box sx={{height:"auto",width:"auto",textAlign:"center",paddingTop:"20px"}}>
            <Typography variant='h4'>MUI DEMO 3</Typography>
            <DataGrid
            rows={data.data}
            columns={columns}
            getRowId={(row)=>row._id}
            showToolbar
            pageSizeOptions={[5,10,25,50,100]}
            >
            </DataGrid>
    </Box>
  )
}
