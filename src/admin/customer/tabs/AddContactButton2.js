import * as React from 'react';
import {
cloneElement,
useCallback,
useMemo,
    useState,
} from 'react';
import { styled, TextField } from '@mui/material';
import clsx from 'clsx';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import IconContentAdd from '@mui/icons-material/Add';
import IconCancel from '@mui/icons-material/Cancel';


import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import {
    Button,
    SaveButton,
    TextInput,
    SelectInput,
    useCreate,
    ArrayInput,
    BooleanInput,
    Form,
    useRecordContext,
    SimpleFormIteratorContext,
    FormDataConsumer
    
} from 'react-admin';


import { useFieldArray, useForm } from 'react-hook-form'

import {
    DisableRemoveFunction,
    SimpleFormIteratorItem,
} from 'react-admin';
//import { AddItemButton as DefaultAddItemButton } from './AddItemButton';
//import { RemoveItemButton as DefaultRemoveItemButton } from './RemoveItemButton';
//import { ReOrderButtons as DefaultReOrderButtons } from './ReOrderButtons';

const AddContactButton = (props) => {
    const {
        addButton,
        removeButton,
        reOrderButtons,
        children,
        className,
        record,
        contactAdded,
        source,
        currentRecord,
        disabled,
        disableAdd,
        disableRemove,
        disableReordering,
        getItemLabel=DefaultLabelFn,
    } = props;


    const [showDialog, setShowDialog] = useState(false);
    const records = currentRecord.contactoClientes

    const [index, setIndex] = useState(records?records.length-1:0)


    const handleOpen = () => {
        if(records){ setIndex(records.length-1)}
        setShowDialog(true);
  };

  const handleCloseClick = () => {
      setShowDialog(false);
      contactAdded()
  };

  console.log(records)


    return (
        <>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="Crear Contacto">
                <DialogTitle>
                Crear Contacto Para
                </DialogTitle>
                <DialogContent >
                <Grid container direction = 'row' justifyContent='space-between'  spacing ={3}>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            fullWidth
                            source={`${source}.${index}.nombre`}
                            label='Nombre'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput
                            fullWidth
                            source={`${source}.${index}.email`}
                            label='E-Mail'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item>
                        <TextInput
                            fullWidth
                            source={`${source}.${index}.cargo`}
                            label='Cargo'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item>
                        <TextInput
                            fullWidth
                            source={`${source}.${index}.cel`}
                            label='Celular'
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item>
                        <SelectInput
                            fullWidth
                            source={`${source}.${index}.rol`}
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
                            source={`${source}.${index}.enviarFactura`}
                            label='Enviar Factura'
                            variant='outlined'
                        />
                    </Grid> 
                </Grid>
                </DialogContent>
                <DialogActions>
                    <Button label="ra.action.cancel" onClick={handleCloseClick}>
                        <IconCancel />
                    </Button>
                    <SaveButton onClick={handleCloseClick} />
                </DialogActions>
            </Dialog>       
            <Button onClick={handleOpen} label="ra.action.create">
                <IconContentAdd />
            </Button>
        </>    )
};

export  default  AddContactButton





const Root = styled('')(({ theme }) => ({
 
}));

const DefaultLabelFn = index => index + 1;