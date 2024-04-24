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

    const[server, setServer] = useState({

      source_ip_address: "",

    });

    const{source_ip_address} = server;

    useEffect(() => {
      loadServer();
    },[]);
  


  const onInputChange = (e) =>{
    console.log(e);
    setServer({...server, [e.target.name]: e.target.value});
  };

  const handleClick =async (e) => {
        
      e.preventDefault();
      await axios.post(`http://localhost:8080/server/${server_uid}`, server).then((response) =>{
        console.log(response.status, response.data);
        setServer({ ...server, source_ip_address: "" });
      });
  };
  const loadServer = async () => {
    const result = await axios.get(`http://localhost:8080/getOneIP/${server_uid}`)
    setServer(result.data)
  };




return(
<Container>
<Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}} >

  {/* <TextField id = "outlined-basic" label = "User UID:" variant = "outlined" 
  value = {server.uid}
  onChange = {(e) => onInputChange(e)}
  /> */}

  <TextField id = "outlined-basic" label= "New IP:" variant ="outlined"
    value = {source_ip_address} name = "source_ip_address"
    onChange = {(e) => {onInputChange(e)}}
  />

    </Paper>
    <Button variant="contained" color ="primary.main" onClick = {handleClick}>
          Edit User
    </Button>
    <Button size = "medium" variant="contained" color = "success">
            <Link underline = "none" to = "/">Go Back</Link>
    </Button>
</Container>
    )
}