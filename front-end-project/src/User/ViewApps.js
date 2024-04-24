import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Box, Button, Container, List, ListItem, Stack, TextField, Typography} from '@mui/material';
import { Link, useParams } from 'react-router-dom';


export default function ViewUser() {


    const[app,setApp] = useState([])

    const {server_uid} = useParams();

    useEffect(()=> {
        loadApp();
    }, []);

    const loadApp = async () => {
        const result = await axios.get(`http://localhost:8080/application/getUser/${server_uid}`)
        setApp(result.data);
    }


  return (
    <Container>
        <Paper align = "center" elevation={8}style = {{padding: '50px 20px', width:600, margin: "20px auto"}}>
            <Stack direction = "row" justifyContent = "space-between" alignItems = "left">
                <Typography gutterBottom variant = "h5" component= "div" align="center">
                    Application Information
                </Typography>
            </Stack>
            <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 500 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align ="Center">Details of Application</TableCell>
                    <TableCell align ="Center">User UID's Assigned</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>
                        {app.app_info_description} 
                    </TableCell>
                    {app.userapps && app.userapps.map((user, index) => (
                    <TableCell key = {index} style={{ padding: '5px', minWidth: '30px', textAlign: 'left' }}>
                        {user.user_apps_uid} 
                    </TableCell>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        <Button size = "small" variant="outline" color = "success">
            <Link underline = "none" to = "/">Go Back</Link>
        </Button>
    </Container>
  )
}
