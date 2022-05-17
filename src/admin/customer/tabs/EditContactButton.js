import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    SaveButton,
    TextInput,
    SelectInput,
    useUpdate,
    useDelete,
    useNotify,
    BooleanInput,
    Form,
    useRecordContext
} from 'react-admin';
import IconContentEdit from '@mui/icons-material/Edit';
import IconCancel from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';




function EditContactButton(props) {
    const{  onChange}= props
    const record = useRecordContext()
    
    const diff = record
    
    const [showDialog, setShowDialog] = useState(false);
    //const [update, { loading }] = useUpdate('ContactoClientes', record.id , diff, record);
    const notify = useNotify();
    const form = useForm();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const [deleteOne ] = useDelete();

    const handleDelete = () => {
//        deleteOne('ContactoClientes', record.id, record)
        setShowDialog(false)  
        form.change('ContactoClientesId', record.id);
        onChange();
    }

    const handleSubmit = async values => {
        console.log(values)
        form.change('ContactoClientesId', data.id);

        update(
            { payload: { data: values } },
            {
                onSuccess: ({ data }) => {
                    setShowDialog(false);
                    // Update the comment form to target the newly created post
                    // Updating the ReferenceInput value will force it to reload the available ContactoCliente
                    form.change('ContactoClientesId', data.id);
                    onChange();
                },
                onFailure: ({ error }) => {
                    notify(error.message, 'error');
                }
            }
        ); 
    };
    if (!record) return null;
    return (
        <>
            <Button onClick={handleClick} >
                <IconContentEdit />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Crear Contacto"
            >
                <DialogTitle>
                    {'Editar Contacto'}
                </DialogTitle>

                <Form
                    resource="ContactoClientes"
                    save={handleSubmit}
                    record={record}
                    >
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
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            fullWidth
                                            source='cargo'
                                            label='Cargo'
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextInput
                                            fullWidth
                                            source='cel'
                                            label='Celular'
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
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
                                    <Grid item xs={12} md={6}>
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
                                    label='ra.action.cancel'
                                    onClick={handleCloseClick}
                                    disabled={loading}
                                >
                                    <IconCancel />
                                </Button>
                                <SaveButton
                                    disabled={loading}
                                />
                                <Button 
                                    disabled={loading} 
                                    onClick={handleDelete}
                                    label='ra.action.delete'
                                />

                            </DialogActions>
                        </>
                        </Form>
            </Dialog>
        </>
    );
}

export default EditContactButton;
