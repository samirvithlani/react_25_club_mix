import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export const MuiDemo2 = () => {
 const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
        field:"firstName",
        headerName:"First Name",
    },
    {
        field:"lastName",
        headerName:"Last Name",
    },
    {
        field:"age",
        headerName:"Age"
    },
    {
        field:"action",
        headerName:"action",
        //render cell for button
        renderCell:(params)=>{
            return <Box>
                <Button variant="contained" color="error" onClick={()=>{
                    alert(params.row.id)
                }}>
                    Delete
                </Button>
            </Box>
        }
    }
  ];
  const rows = [
    {
        id:1, firstName:"Jon", lastName:"Snow", age:35,
    },
    {
        id:2, firstName:"Cersei", lastName:"Lannister", age:42,
    },
    {
        id:3, firstName:"Jaime", lastName:"Lannister", age:45,
    },
    {
        id:4, firstName:"Arya", lastName:"Stark", age:16,
    },
    {
        id:5, firstName:"Daenerys", lastName:"Targaryen", age:34,
    },
    {
        id:6, firstName:"Melisandre", lastName:"", age:150,
    },
    {
        //action column delete button
        id:7, firstName:"Ferrara", lastName:"Clifford", age:44,
    }
    
  ]
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MUI DEMO 2</h1>

      <Box sx={{height:"auto",width:"auto"}}>
        <DataGrid
        rows={rows}
        columns={columns}
        >

        </DataGrid>
      </Box>
    </div>
  );
};
