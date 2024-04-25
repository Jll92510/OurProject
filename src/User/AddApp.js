import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Box, Button, Container, List, ListItem, Stack, TextField, ThemeProvider, Typography} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import theme from '../components/Appbar';
import {useTheme} from '@material-ui/core/styles';

export default function ViewUser() {
  const [value, setValue] = useState('')
  const[app_info_uid, setUid] = useState('')
  const[app_info_description,setDescription] = useState('')

  const[user, setUsers] = useState([])
  const classes = useTheme(theme);
  const {uid} = useParams();


  const handleClick =(e) => {
    e.preventDefault()
    const user = {app_info_uid, app_info_description}
    console.log(user)
    fetch("http://localhost:8080/application",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
})
    setUid("")
    setDescription("")
}


    // useEffect(()=> {
    //     loadServer();
    // }, []);

    // const loadServer = async () => {
    //     const result = await axios.get("http://localhost:8080/application/getAll")
    //     setServer(result.data)
    // }
  return (
    <ThemeProvider theme ={theme}>
    <Container>
        <Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}}>
            <TextField id = "outlined-basic" label = "App UID:" variant = "outlined"
              value = {app_info_uid}
              onChange = {(e) => setUid(e.target.value)}
            />
          
            <TextField id = "outlined-basic" label= "Application Description:" variant ="outlined"
              value ={app_info_description}
              onChange = {(e) => setDescription(e.target.value)}
            />

        </Paper>

        <Button variant="contained"  color = "primary.main" onClick = {handleClick}>
            Create New Application
            </Button>
    </Container>
    </ThemeProvider>

  )
}