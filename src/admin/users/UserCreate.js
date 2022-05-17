
import React from "react";
import CreateProductLayout from "./components/CreateProductLayout";
import { Create, SimpleForm, TextInput } from "react-admin";

import makeStyles from '@mui/styles/makeStyles';


//window.LOG_LEVEL = 'DEBUG';
//const logger = new Logger('foo');
const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
}));



const UserCreate = (props) => {

    const classes = useStyles();
    

    return(
    <Create redirect='list'>      
        <SimpleForm  className={classes.root}>
            <TextInput source='nombre'/>
            <TextInput source='cedula'/>
        </SimpleForm>
    </Create>
    )
};



export default UserCreate