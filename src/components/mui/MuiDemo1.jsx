import React from "react";
import { Avatar, Box, Button, Fab, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

export const MuiDemo1 = () => {
  var students = [
    {
      id: 1,
      name: "ram",
      grade: "A",
      age: 20,
    },
    {
      id: 2,
      name: "sumit",
      grade: "B",
      age: 20,
    },
    {
      id: 3,
      name: "amit",
      grade: "B",
      age: 20,
    },
    {
      id: 4,
      name: "shyan",
      grade: "C",
      age: 20,
    },
  ];
  return (
    <Box sx={{ p: 4, backgroundColor: "whitesmoke", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Student DashBoard
      </Typography>
      <Grid container spacing={3} sx={{ backgroundColor: "white" }}>
        {students.map((stu) => {
          return (
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar  sx={{backgroundColor:"blue",mb:2,height:56,width:56}}>
                  {stu.name.charAt(0)}
                </Avatar>
                <Typography variant="h6">{stu.name}</Typography>
                <Typography color="text.secondary">{stu.age}</Typography>
                <Box sx={{mt:2,px:2,py:1,borderRadius:2,backgroundColor:stu.grade=="A"?"success.light":
                  stu.grade=="B"?"info.light":"warning.light"}}>
                    <Typography>Grade:{stu.grade}</Typography>
                </Box>
                <Button  startIcon ={<DeleteIcon/>} variant="outlined" sx={{m:1}} color="error">DELETE</Button>
                <Fab sx={{backgroundColor:"pink"}}>
                  <FingerprintIcon/>
                </Fab>
                <Tooltip title="info">
                <IconButton>
                  <InfoIcon/>
                </IconButton>
                </Tooltip>
              </Paper>
            </Grid>
          );
        })}
          
      </Grid>
    </Box>
  );
};
