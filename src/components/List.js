import React, {useState} from 'react';
import { TextField } from "@material-ui/core";
import {Container, Paper, Button} from "@material-ui/core";
import theme from "./Appbar";
import {useTheme} from '@material-ui/core/styles';




export default function List(){
    const paperStyle ={padding: '50px 20px', width:600, margin: "20px auto"}
    const[user_uid, setName] = useState('')
    const[user_id,setID] = useState('')
    const[user_password,setIP] = useState('')
    const[user_role,setAppID] = useState('')
    const classes = useTheme(theme);

    const handleClick =(e) => {
        e.preventDefault()
        const user = {user_uid, user_id, user_password, user_role}
        console.log(user)
        fetch("http://localhost:8080/customer",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
    }).then(()=>{
        console.log("New user added")
    })
        setName("")
        setID("")
        setIP("")
        setAppID("")
    }

    return (
    <Container>
        <Paper elevation = {3} style = {paperStyle}>
            <h1 style = {{color: "#006747"}}>Add User</h1>
    <form className = {classes.root} noValidate autoComplete = "off">

    <TextField id = "outlined-basic" label= "Username:" variant ="outlined"
    value ={user_uid}
    onChange = {(e) => setName(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "User ID:" variant ="outlined"
        value ={user_id}
        onChange = {(e) => setID(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "User IP Address:" variant ="outlined"
            value ={user_password}
            onChange = {(e) => setIP(e.target.value)}
    />

    <TextField id = "outlined-basic" label= "Application ID's Allotted" variant ="outlined"
                value ={user_role}
                onChange = {(e) => setAppID(e.target.value)}
    />

    <Button variant="contained" color ="primary.main" onClick = {handleClick}>
    Create New User
    </Button>

    {/* <Button variant="contained" color ="primary.main" onClick = {userDetails}>
    Show User
    </Button> */}


    </form>
    </Paper>
    </Container>
    );
}

