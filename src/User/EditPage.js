import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Paper, Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import EnhancedTable from '../components/Table';
import theme from "../components/Appbar";
import {useTheme} from '@material-ui/core/styles';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function EditPage() {


    const {server_uid} =useParams();

    const[user, setUser] = useState({

      user_id: "",
      user_password:"",
      user_role: ""

    });

    const{user_id, user_password, user_role} = user;

    useEffect(() => {
      loadUser();
    },[]);
  


  const onInputChange = (e) =>{
    console.log(e);
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleClick =async (e) => {
        
      e.preventDefault();
      await axios.post(`http://localhost:8080/customer/${server_uid}`,{user_id,user_role,user_password}).then((response) =>{
        console.log(response.status, response.data);
        setUser({ ...user,user_id: "",user_password: "", user_role: "" });
      });
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/customer/getUser/${server_uid}`)
    setUser(result.data)
  };




return(
<Container>
<Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}} >


  <TextField id = "outlined-basic" label= "New ID:" variant ="outlined"
    value = {user_id} name = "user_id"
    onChange = {(e) => {onInputChange(e)}}
  />

  <TextField id = "outlined-basic" label= "New Role:" variant ="outlined"
      value = {user_role} name = "user_role"
      onChange = {(e) => {onInputChange(e)}}
    />

  <TextField id = "outlined-basic" label= "New Password:" variant ="outlined"
      value = {user_password} name = "user_password"
      onChange = {(e) => {onInputChange(e)}}
    />

    </Paper>
    <Button variant="contained" color ="primary.main" onClick = {handleClick}>
          Edit User
    </Button>
    <Button size = "medium" variant="contained" color = "success">
            <Link underline = "none" to = "/tabs">Go Back</Link>
    </Button>
</Container>
    )
}