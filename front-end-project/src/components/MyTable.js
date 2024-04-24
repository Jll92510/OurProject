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
    const [user, setUser] = useState([])

    const {server_uid} = useParams();
  
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers=async() => {
      const result =await axios.get("http://localhost:8080/customer/getAll")
      setUser(result.data);
    };

    const deleteUser = async (server_uid) => {
      await axios.delete(`http://localhost:8080/customer/${server_uid}`)
      loadUsers();
    }

    const addToApp = async () => {
      const result = await axios.post("http://locahost:8080/userapps")
      setUser(result.data);
    }



  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align ="center">User UID</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">User Role</TableCell>
            <TableCell align="center">Created By</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Modified By</TableCell>
            <TableCell align="center">Modified At</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user,index)=> (
            <TableRow
              key={user.user_uid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align = "center"> {user.user_uid}</TableCell>
              <TableCell align="center">{user.user_id}</TableCell>
              <TableCell align="center">{user.user_role}</TableCell>
              <TableCell align="center">{user.create_by}</TableCell>
              <TableCell align="center">{user.create_at}</TableCell>
              <TableCell align="center">{user.modified_by}</TableCell>
              <TableCell align="center">{user.modified_at}y</TableCell>
              <TableCell align="center">
                <Box textAlign={"center"}>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/edituser/${user.user_uid}`}>Edit</Link>
                  </Button>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/viewuser/${user.user_uid}`}>View</Link>
                  </Button>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/addtoapp/${user.user_uid}`}>Add To Application</Link>
                  </Button>
                  <Button size = "small" variant="text" color="error" onClick = {() => deleteUser(user.user_uid)}>Delete</Button>

                </Box>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
