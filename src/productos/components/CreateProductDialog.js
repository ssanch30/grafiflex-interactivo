import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    SaveButton,
    Button,
    useCreate,
    useNotify,
    Form,
} from 'react-admin';
import IconContentAdd from '@mui/icons-material/Add';
import IconCancel from '@mui/icons-material/Cancel';
import  CreateProductLayout  from './CreateProductLayout'

import makeStyles from '@mui/styles/makeStyles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
    createButton:{
        marginTop: '8px',
        minHeight: '40px',
        marginLeft: '2px',
        minWidth:'100%'
    }
}));

const CreateProductDialog = (props)=>{
   

    const theme = useStyles()
    const {clienteID, isCustomerDisabled} = props
    const [create, { loading, error }] = useCreate();

    const [showDialog, setShowDialog] = useState(false);

    const notify = useNotify();
 
      

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = async values => {
        //console.log(values)
        console.log(values)
        create('Productos', values,
        {
            onSuccess: ({ data }) => {
                setShowDialog(false);
            },
            onFailure: ({ error }) => {
                notify(error.message, 'error');
            }}
        )
    };
    if (error) { return <p>ERROR</p>; } 
    return (
        <>
            <Button label='Nuevo Producto' variant='contained'  onClick={handleClick}>
                <IconContentAdd/>
            </Button>
            <Dialog 
                fullWidth
                maxWidth='lg'
                open={showDialog||false}
                onClose={handleCloseClick}
                aria-label="Crear Marca"
            >
                <DialogTitle>
                    <Typography>{`Crear Producto Nuevo`}</Typography>
                </DialogTitle>
                <Form
                    resource="Productos"
                    defaultValues={{clienteID: clienteID}}
                    id='create-product'
                    onSubmit={handleSubmit}
                    >
                        <>
                            <DialogContent>
                                <CreateProductLayout isCustomerDisabled={isCustomerDisabled}/>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    label="ra.action.cancel"
                                    onClick={handleCloseClick}
                                    disabled={loading}
                                >
                                    <IconCancel />
                                </Button>
                                <SaveButton formId='create-product' />
                            </DialogActions>
                        </>
                    </Form>
            </Dialog>
            </>
    );
}

export default CreateProductDialog;
