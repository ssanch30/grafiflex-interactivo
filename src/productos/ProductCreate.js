import React, { useState, useEffect } from "react";
import CreateProductLayout from "./components/CreateProductLayout";
import { Create, SimpleForm } from "react-admin";
import {useForm} from 'react-hook-form'
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



const ProductCreate = (props) => {

    const classes = useStyles();
    

    return(
    <Create redirect='list'>      
        <SimpleForm  className={classes.root}>
            <CreateProductLayout {...props}/>
        </SimpleForm>
    </Create>
    )
};



export default ProductCreate