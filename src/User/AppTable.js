import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Box, Button} from '@mui/material';
import { Link, useParams } from 'react-router-dom';




export default function BasicTable() {
    const [app, setApp] = useState([])

    const {server_uid} = useParams();
  
    useEffect(() => {
        loadApp();
    }, []);

    const loadApp=async() => {
      const result =await axios.get("http://localhost:8080/application/getAll")
      setApp(result.data);
    };

    const deleteApp = async (server_uid) => {
      await axios.delete(`http://localhost:8080/application/${server_uid}`)
      loadApp();
    }

    // const deleteUser = async (server_uid) => {
    //   await axios.delete(`http://localhost:8080/application/getUser/${server_uid}`)
    //   loadUsers();
    // }

    // const addToApp = async () => {
    //   const result = await axios.post("http://locahost:8080/userapps")
    //   setApp(result.data);
    // }



  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align ="center">App UID</TableCell>
            <TableCell align="center">App Description</TableCell>
            <TableCell align="center">Created By</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Modified By</TableCell>
            <TableCell align="center">Modified At</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {app.map((app,index)=> (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align = "center"> {app.app_info_uid}</TableCell>
              <TableCell align="center">{app.app_info_description}</TableCell>
              <TableCell align="center">{app.create_by}</TableCell>
              <TableCell align="center">{app.create_at}</TableCell>
              <TableCell align="center">{app.modified_by}</TableCell>
              <TableCell align="center">{app.modified_at}</TableCell>
              <TableCell align="center">
                <Box textAlign={"center"}>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/editapp/${app.app_info_uid}`}>Edit</Link>
                  </Button>

                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/viewapp/${app.app_info_uid}`}>View</Link>
                  </Button>
                  <Button size = "small" variant="outline" color = "error" onClick = {() => deleteApp(app.app_info_uid)}>
                    Delete
                  </Button>

                </Box>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
