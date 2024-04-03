import React from 'react';
// import {createTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#FF5733',
//         },
//         secondary: {
//             main: '#E0C2ff',
//             light: '#F5EBFF',
//             contrastText: '#47008f',
//         },
//     },

// });
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },

}));

export default function Appbar(){
    const classes = useStyles();
    // const classes = useTheme(theme)
    return (
        <div className = {classes.root}>
            <AppBar position = "static">
                <Toolbar>
                    <IconButton edge = "start" className ={classes.menuButton} color = "inherit" aria-label = "menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4' className ={classes.title}>
                        Welcome, User!
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}