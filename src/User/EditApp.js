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

    const[app, setApp] = useState({

        app_info_description: ""

    });

    const{app_info_description} = app;

    useEffect(() => {
      loadApp();
    },[]);
  


  const onInputChange = (e) =>{
    console.log(e);
    setApp({...app, [e.target.name]: e.target.value});
  };

  const handleClick =async (e) => {
        
      e.preventDefault();
      await axios.post(`http://localhost:8080/application/${server_uid}`,{app_info_description}).then((response) =>{
        console.log(response.status, response.data);
        setApp({ ...app,app_info_description: ""});
      });
  };
  const loadApp = async () => {
    const result = await axios.get(`http://localhost:8080/application/getUser/${server_uid}`)
    setApp(result.data)
  };




return(
<Container>
<Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}} >


  <TextField id = "outlined-basic" label= "New App Name:" variant ="outlined"
    value = {app_info_description} name = "app_info_description"
    onChange = {(e) => {onInputChange(e)}}
  />



    </Paper>
    <Button variant="contained" color ="primary.main" onClick = {handleClick}>
          Edit App
    </Button>
    <Button size = "medium" variant="contained" color = "success">
            <Link underline = "none" to = "/tabs">Go Back</Link>
    </Button>
</Container>
    )
}