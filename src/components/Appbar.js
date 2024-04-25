import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createTheme, ThemeProvider, useTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
      primary: {
          main: '#f5f4f2',
      },
      secondary: {
          main: '#006747',
          light: '#F5EBFF',
          contrastText: '#47008f',
      },
      menuButton:{
        color: "#006747"
      },
      root: {
            backgroundColor: "E0C2ff",
      }
  },

});

export default function Appbar(){
    const classes = useTheme(theme)
    return (
        <ThemeProvider theme = {theme}>
        <div className = {classes.root}>
            <AppBar position = "static" color = 'secondary'>
                <Toolbar>
                    <IconButton edge = "start" className ={classes.menuButton} color = "primary" aria-label = "menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4' className ={classes.title} color = "primary">
                        Welcome, Admin!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        </ThemeProvider>
    );
}



