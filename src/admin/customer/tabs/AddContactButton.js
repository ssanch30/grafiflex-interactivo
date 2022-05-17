import React, { useState } from 'react';
import { useForm, useWatch, useFieldArray } from 'react-hook-form';
import {
    Button,
    SaveButton,
    TextInput,
    SelectInput,
    useCreate,
    ArrayInput,
    SimpleFormIteratorContext,
    BooleanInput,
    Form,
    useRecordContext,
    
} from 'react-admin';
import IconContentAdd from '@mui/icons-material/Add';
import IconCancel from '@mui/icons-material/Cancel';


import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function AddContactButton(props) {
    
    const{ onChange } = props

    const record = useRecordContext()

    const [showDialog, setShowDialog] = useState(false);
//    const [create, { loading }] = useCreate('ContactoClientes');
    const form = useForm();
    const currentRecord = useWatch()
    
    const clienteName = record ?  record.razonSocial : currentRecord.razonSocial
 

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSave =  values => {
            console.log(values)
            
            handleCloseClick(false);
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Crear Contacto"
            >

                <DialogTitle>
                    <h4>{`Crear Contacto Para ${clienteName}`}</h4>
                </DialogTitle>
                <ArrayInput  source='contactoClientes'>
                    <>
                                <DialogContent>
                                    <Grid container direction = 'row' justifyContent='space-between'  spacing ={3} fullWidth>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                fullWidth
                                                source='nombre'
                                                label='Nombre'
                                                variant='outlined'
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                fullWidth
                                                source='email'
                                                label='E-Mail'
                                                variant='outlined'
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextInput
                                                fullWidth
                                                source='cargo'
                                                label='Cargo'
                                                variant='outlined'
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextInput
                                                fullWidth
                                                source='cel'
                                                label='Celular'
                                                variant='outlined'
                                            />
                                        </Grid>
                                        <Grid item>
                                            <SelectInput
                                                fullWidth
                                                source='rol'
                                                label='Rol Cliente'
                                                variant='outlined'
                                                choices={[
                                                    {id:'COMPRAS', name: 'Compras'},
                                                    {id:'PRODUCCION', name: 'Produccion'},
                                                    {id:'ADMINISTRACION', name: 'Administracion'},
                                                    {id:'DISENO', name: 'Gerencia'},
                                                    {id:'VENTAS', name: 'Ventas'},
                                                ]}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <BooleanInput
                                                fullWidth
                                                source='enviarFactura'
                                                label='Enviar Factura'
                                                variant='outlined'
                                            />
                                        </Grid> 
                                    </Grid>

                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        label="ra.action.cancel"
                                        onClick={handleCloseClick}
                                    >
                                        <IconCancel />
                                    </Button>
                                    <SaveButton onClick={handleSave}
                                    />
                                </DialogActions>
                            </>
                        </ArrayInput>
                    </Dialog>
        </>
    );
}

export default AddContactButton;

