import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Paper, Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import EnhancedTable from './Table';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const[name, setName] = useState('')
  const[ID,setID] = useState('')
  const[IP,setIP] = useState('')
  const[AppID,setAppID] = useState('')

  const handleClick =(e) => {
    e.preventDefault()
    const user = {name, ID, IP, AppID}
    console.log(user)
//     fetch("http://localhost:8080/user/add",{
//         method: "POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(user)
// })
    setName("")
    setID("")
    setIP("")
    setAppID("")
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Add User" {...a11yProps(0)} />
          <Tab label="View Users" {...a11yProps(1)} />
          <Tab label="Edit Users" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1 style = {{color: "#006747"}}>Add User</h1>
        <Container>
          <Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}}>
            <TextField id = "outlined-basic" label = "Username:" variant = "outlined"
              value = {name}
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
          </Paper>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <h1 style = {{color: "#006747"}}>View Users</h1>
        <EnhancedTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <h1 style = {{color: "#006747"}}>Edit Users</h1>
      </CustomTabPanel>
    </Box>
  );
}