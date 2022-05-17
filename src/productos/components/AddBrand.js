import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
    required,
    Button,
    SaveButton,
    TextInput,
    useCreate,
    useNotify,
    Form
} from 'react-admin';
import IconContentAdd from '@mui/icons-material/Add';
import IconCancel from '@mui/icons-material/Cancel';


import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography, unstable_useId } from '@mui/material';

const AddBrand = (props)=>{
    
    
    const{ cliente,productID , onChange, record}= props
   
    const [create, { loading, error }] = useCreate();


    const [showDialog, setShowDialog] = useState(true);
    
    const notify = useNotify();
    const {setValue} = useFormContext();
 
      

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };
    
    
    
    const handleSubmit = async values => {
        //console.log(values)
        console.log(values)
        create('Marcas', {data:{...values}},
        {
            onSuccess: ({ data }) => {
                setShowDialog(false);
                // Update the comment form to target the newly created post
                // Updating the ReferenceInput value will force it to reload the available ContactoCliente
                setValue('marcaID', data.id);
                //onChange();
            },
            onFailure: ({ error }) => {
                notify(error, 'error');
            }}
        )
    };

    return (

            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Crear Marca"
            >
                <DialogTitle>
                    <Typography>{`Crear Marca Para ${cliente.razonSocial}`}</Typography>
                </DialogTitle>

                <Form
                    resource="Marcas"
                    defaultValues={{clienteID: cliente.id, id:(Math.random()*100).toFixed(2).toString()}}
                    id='create-brand'
                    onSubmit={handleSubmit}
                    >
                        <>
                            <DialogContent>
                                <Grid container direction = 'column' justifyContent='space-between'  spacing={3} fullWidth>
                                    <Grid item xs={12} md={12}>
                                    <TextInput
                                            fullWidth
                                            source='nombre'
                                            label='Nombre'
                                            variant='outlined'
                                            validate={required()}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextInput
                                            fullWidth
                                            source='productor'
                                            label='Productor'
                                            variant='outlined'
                                        />
                                    </Grid>
                                </Grid>

                            </DialogContent>
                            <DialogActions>
                                <Button
                                    label="ra.action.cancel"
                                    onClick={handleCloseClick}
                                    disabled={loading}
                                >
                                    <IconCancel />
                                </Button>
                                <SaveButton formId='create-brand'/>
                            </DialogActions>
                        </>
                </Form>
            </Dialog>
    );
}

export default AddBrand;
