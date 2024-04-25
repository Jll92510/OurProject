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


    const[server,setServer] = useState([])

    const {server_uid} = useParams();

    useEffect(()=> {
        loadServer();
    }, []);

    const loadServer = async () => {
        const result = await axios.get(`http://localhost:8080/getOneIP/${server_uid}`)
        setServer(result.data);
    }
  return (
    <Container>
        <Paper align = "center" elevation={8}style = {{padding: '50px 20px', width:600, margin: "20px auto"}}>
            <Stack direction = "row" justifyContent = "space-between" alignItems = "left">
                <Typography gutterBottom variant = "h5" component= "div" align="center">
                    User Information
                </Typography>
            </Stack>
            <List>
                <ListItem>
                    Details of user id: {server.user_uid}
                </ListItem>
                <ListItem>
                App info ID: {server.app_info_uid}
                </ListItem>
                <ListItem>
                Source IP address: {server.source_ip_address}
                </ListItem>
                <ListItem>
                Destination IP address: {server.destination_ip_address}
                </ListItem>
                <ListItem>
                Destination Port: {server.destination_port}
                </ListItem>
                <ListItem>
                Created By: {server.create_by}
                </ListItem>
                <ListItem>
                Modified By: {server.modify_by}
                </ListItem>
            </List>
            <Button size = "small" variant="outline" color = "success">
            <Link underline = "none" to = "/tabs">Go Back</Link>
        </Button>
        </Paper>
    </Container>
  )
}
