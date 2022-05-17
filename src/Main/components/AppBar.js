// in src/MyAppBar.js
import * as React from 'react';
//import { AppBar } from 'react-admin';
import { AppBar } from "react-admin";

import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import {ReactComponent as Logo} from './Logo.svg';

//import Logo from './Logo.svg';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    logo:{
        flex:1,
        maxHeight:'35px',
        marginTop: '10px',
        marginBottom:'5px'
    },
});

const AppBarComp = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} >
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <Logo className={classes.logo}/>
            <span className={classes.spacer} />
            
        </AppBar>
    );
};

export default AppBarComp