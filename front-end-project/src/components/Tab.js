import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Paper, Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import theme from "./Appbar";
import {useTheme} from '@material-ui/core/styles';
import MyTable from './MyTable';
import EditPage from '../User/EditPage';
import AppInfo from '../User/AddApp';
import ViewApps from '../User/AppTable';
import ViewServer from '../User/ViewServer';
import { useParams } from 'react-router-dom';



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
        <Box sx={{ p: 4 }}>
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
  const[user_uid, setName] = useState('')
  const[user_id,setID] = useState('')
  const[user_password,setIP] = useState('')
  const[user_role,setAppID] = useState('')
  const classes = useTheme(theme);
  const[user, setUsers] = useState([])

  const {server_uid} = useParams();


  const handleClick =(e) => {
    e.preventDefault()
    const user = {user_uid, user_id, user_password, user_role}
    console.log(user)
    fetch("http://localhost:8080/customer",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
})
    setName("")
    setID("")
    setIP("")
    setAppID("")
}
// useEffect(()=>{
//   fetch("http://localhost:8080/getAll")
//   .then(res=>res.json())
//   .then((result)=>{
//     setUsers(result);
//   }
// )
// },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Add User" {...a11yProps(0)} />
          <Tab label="View Users" {...a11yProps(1)} />
          <Tab label="Add Application" {...a11yProps(2)} />
          <Tab label="View Application" {...a11yProps(3)} />
          <Tab label="View Server" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1 style = {{color: "#006747"}}>Add User</h1>
        <Container>
          <Paper elevation = {8} style = {{padding: '50px 20px', width:600, margin: "20px auto"}}>
            <TextField id = "outlined-basic" label = "User UID:" variant = "outlined"
              value = {user_uid}
              onChange = {(e) => setName(e.target.value)}
            />
          
            <TextField id = "outlined-basic" label= "User ID:" variant ="outlined"
              value ={user_id}
              onChange = {(e) => setID(e.target.value)}
            />

          <TextField id = "outlined-basic" label= "User Password:" variant ="outlined"
              value ={user_password}
              onChange = {(e) => setIP(e.target.value)}
           />

          <TextField id = "outlined-basic" label= "User Role:" variant ="outlined"
                value ={user_role}
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
          <MyTable/>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <h1 style = {{color: "#006747"}}>Add Application</h1>
        <Container>
          <AppInfo/>
        </Container>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <h1 style = {{color: "#006747"}}>View Application</h1>
        <Container>
          <ViewApps/>
        </Container>
      </CustomTabPanel>

      
      <CustomTabPanel value={value} index={4}>
        <h1 style = {{color: "#006747"}}>View Servers</h1>
        <Container>
          <ViewServer/>
        </Container>
      </CustomTabPanel>
    </Box>
  );
}