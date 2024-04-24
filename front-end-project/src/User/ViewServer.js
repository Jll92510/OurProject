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
    const [server, setServer] = useState([])

    const {server_uid} = useParams();
  
    useEffect(() => {
        loadServer();
    }, []);

    const loadServer =async() => {
      const result =await axios.get("http://localhost:8080/server/getAll")
      setServer(result.data);
    };

    const deleteServer = async (server_uid) => {
      await axios.delete(`http://localhost:8080/server/${server_uid}`)
      loadServer();
    }



  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align ="center">Server UID</TableCell>
            <TableCell align="center">Source IP</TableCell>
            <TableCell align="center">Destination Port</TableCell>
            <TableCell align="center">Created By</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Modified By</TableCell>
            <TableCell align="center">Modified At</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {server.map((server,index)=> (
            <TableRow
              key={server.server_info_uid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align = "center"> {server.server_info_uid}</TableCell>
              <TableCell align="center">{server.source_ip_address}</TableCell>
              <TableCell align="center">{server.destination_port}</TableCell>
              <TableCell align="center">{server.create_by}</TableCell>
              <TableCell align="center">{server.create_at}</TableCell>
              <TableCell align="center">{server.modified_by}</TableCell>
              <TableCell align="center">{server.modified_at}</TableCell>
              <TableCell align="center">
                <Box textAlign={"center"}>
                  {/* <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/edituser/${user.user_uid}`}>Edit</Link>
                  </Button>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/viewuser/${user.user_uid}`}>View</Link>
                  </Button>
                  <Button size = "small" variant="text" color="success">
                  <Link size = "small" variant="text" color="secondary" to = {`/addtoapp/${user.user_uid}`}>Add To Application</Link>
                  </Button> */}
                  <Button size = "small" variant="text" color="error" onClick = {() => deleteServer(server.server_info_uid)}>Delete</Button>

                </Box>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
