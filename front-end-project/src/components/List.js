import React, {useState} from 'react';
import { TextField } from "@material-ui/core";
import {Container, Paper, Button} from "@material-ui/core";
import theme from "./Appbar";
import {useTheme} from '@material-ui/core/styles';




export default function List(){
    const paperStyle ={padding: '50px 20px', width:600, margin: "20px auto"}
    const[name, setName] = useState('')
    const[ID,setID] = useState('')
    const[IP,setIP] = useState('')
    const[AppID,setAppID] = useState('')
    const classes = useTheme(theme);

    const handleClick =(e) => {
        e.preventDefault()
        const list = {name, ID, IP, AppID}
        console.log(list)
        setName("")
        setID("")
        setIP("")
        setAppID("")
    }
    


    return (
    <Container>
        <Paper elevation = {3} style = {paperStyle}>
            <h1 style = {{color: "primary.main"}}>Add User</h1>
    <form className = {classes.root} noValidate autoComplete = "off">

    <TextField id = "outlined-basic" label= "Username:" variant ="outlined"
    value ={name}
    onChange = {(e) => setName(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "User ID:" variant ="outlined"
        value ={ID}
        onChange = {(e) => setID(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "User IP Address:" variant ="outlined"
            value ={IP}
            onChange = {(e) => setIP(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "Application ID's Allotted" variant ="outlined"
                value ={AppID}
                onChange = {(e) => setAppID(e.target.value)}
    />

    <Button variant="contained" color ="primary.main" onClick = {handleClick}>
    Create New User
    </Button>


    </form>
    </Paper>
    </Container>
    );
}

