import React, { useState } from "react";
import { Create,  TextInput, useRecordContext,
         ReferenceInput, ArrayInput,
         SimpleFormIterator,  AutocompleteInput,
          FormDataConsumer, SimpleForm} from "react-admin";

import { Grid, Typography, Box, Chip } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import CreateProductDialog from '../productos/components/CreateProductDialog'
import SelectOrderType from './containers/SelectOrderType'

import Montaje from './containers/Montaje'

//window.LOG_LEVEL = 'DEBUG';
//const logger = new Logger('foo');
const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
    customerField: {
        marginRight:'6px',
    },
    RaAutocompleteArrayInput:{
        fontWeight: 'bold',
        '& chip':{backgroundColor:'black'}
    },
    chip:{
        variant:'outlined'
    }
}));



const OrdenCreate = (props) => {

    

    return(
    <Create>
        <SimpleForm  >
                <ProductsOrClients {...props}/> 
        </SimpleForm> 
    </Create>
    )
};
const OptionRenderer =  ( ) => {
    const record = useRecordContext(); 
    return(
        <Grid container direction='row' justifyContent='space-between' spacing={2}>
            <Grid item xs zeroMinWidth>
                <Typography gutterBottom  component={'div'} noWrap style={{'overflowWrap': 'break-word'}}>
                    <Box  sx={{ width:'50px', maxWidth:'40px' ,marginLeft:'2px', marginRight:'5px'}}>{` ${record.nombre}`}</Box> 
                </Typography>
            </Grid>
            <Grid item>
                <Typography component={'div'}>
                    <Box sx={{fontStyle:'italic', fontWeight:'light', fontSize:'11pt'}}>{`${record.id}` }</Box>
                </Typography>
            </Grid>                     
        </Grid>
    )}

const inputText = choice => (choice ? `(${choice.id})   ${choice.nombre}`:null);

const matchSuggestion = (filterValue, choice) =>  choice.id.toUpperCase().match(filterValue.toUpperCase()) || choice.nombre.toUpperCase().match(filterValue.toUpperCase());
///const getOrdenType = (choice)=>choice.datosFacturacion.precioOrden.map(tipoOrden

const ProductsOrClients = (props)=>{
    const classes = useStyles();
    const {record} = props
    const [client, setClient] = useState()

    return(
    <FormDataConsumer>
        {
            ({formData, getSource,...rest})=>(
    <Grid container direction='column'>
        <Grid  item container direction='row'  alignContent={'space-between'}>
            <Grid item sm={10}lg={6} className={classes.customerField}>
                <ReferenceInput source='clienteID' reference='Clientes' > 
                    <AutocompleteInput label='Cliente' optionText='razonSocial' variant='outlined'/>
                </ReferenceInput>
            </Grid>
            <Grid item sm={2}lg={2}>
                <TextInput  source="odc" label='Orden de Compra' variant="outlined"/>
            </Grid>
            {(formData.clienteID?(
            <Grid  item sm={10} lg={12} container spacing={3} direction='row' alignItems="center" >
                <Grid item sm={10} lg={6}>
                <ArrayInput source='productoID' label='Producto(s)'helperText='En caso de co-impresión agregue los productos asociados'>
                    <SimpleFormIterator>
                        <ReferenceInput 
                            fullWidth 
                            filter={{productosByCliente: {clienteID: formData.clienteID}}} 
                            reference='Productos'
                            {...rest}
                            > 
                            <AutocompleteInput helperText='Seleccione el producto relacionado con la orden o cree uno nuevo'
                                variant='outlined'
                                label='Producto'                             
                                filterToQuery={searchText => searchText?({productosByCliente:{clienteID: formData.clienteID}}):{}} 
                                optionText={<OptionRenderer/>} 
                                inputText={inputText}
                                matchSuggestion={matchSuggestion}                            
                                />
                        </ReferenceInput>
                    </SimpleFormIterator>
                </ArrayInput>
                </Grid>
                <Grid  item sm={2}  lg={2} >
                    <CreateProductDialog  clienteID={formData.clienteID} isCustomerDisabled={true}  />
                </Grid>
                <Grid  item sm={10} lg={8} container direction='row'>
                    <Grid item>
                        <SelectOrderType clientId={formData.clienteID} client={client} handleSetClient={setClient}/>
                    </Grid> 
                </Grid>
            </Grid>
            ):(<span/>))
            }
            {
                formData.tipoOrden && client.maquinas ? (

                <Grid item md={12}>
                    <Montaje {...props} formData={formData} client={client}  />
                </Grid>
                ):(<span/>)
            }
        </Grid>
    </Grid>
    )}
    </FormDataConsumer>
    )


}




export default OrdenCreate


/*const SelectOrderButton = props => {
    
    const change=()=>{
        console.log('should change')
    }

    const {
        input: { name, onChange, ...rest },
        meta: { touched, error },
        isRequired
    } = useInput(props);
    
    return (
        <>
        <Field name="ordenNueva" parse={() => 1}>
            {({ input, meta }) => (
                <Button  
                onClick={()=>{

                    input.onChange()
                    props.doChange(1)
                }

                }    
                label='Producto Nuevo'  
                variant="outlined"/>
            )}
        </Field>
        <Field name="ordenNueva" parse={() => 0}>
            {({ input, meta }) => (
                <Button  onClick={input.onChange} label='Producto Existente' variant="outlined"/>
            )}
        </Field>
        </>
    );
};


/*
import React, {cloneElement} from "react"
import {TextInput, FormWithRedirect, useCreateController, CreateContextProvider, DateInput, ArrayInput,  SimpleForm, SimpleFormIterator, Create } from 'react-admin'

import OrdenStepper from './containers/stepper'


'''''''''''''''





''''''''''''

const OrdenCreate = props => {
   
   
    return(
        <MyCreate {...props}>
            <SimpleForm>
                <OrdenStepper {...props}/>
            </SimpleForm>
        </MyCreate> 
    
        )
}




const MyCreate = props => {
    const createControllerProps = useCreateController(props);
    const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Create Post'
        record, // empty object, unless some values were passed in the location state to prefill the form
        redirect, // the default redirection route. Defaults to 'edit', unless the resource has no edit view, in which case it's 'list'
        resource, // the resource name, deduced from the location. e.g. 'posts'
        save, // the create callback, to be passed to the underlying form as submit handler
        saving, // boolean that becomes true when the dataProvider is called to create the record
        version, // integer used by the refresh feature
    } = createControllerProps;
    return (
        <CreateContextProvider value={createControllerProps}>
            <div>
                <h1>{defaultTitle}</h1>
                {cloneElement(props.children, {
                    basePath,
                    record,
                    redirect,
                    resource,
                    save,
                    saving,
                    version,
                })}
            </div>
        </CreateContextProvider>
    );
}

const PostCreate = props => (
    <MyCreate {...props}>
        <SimpleForm>
            ...
        </SimpleForm>
    </MyCreate>
)

const OrdenCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <NumberInput source="numero" />
            <NumberInput source="version" />
            <TextInput source="nombre" />
            <TextInput source="descripcionCliente" />
            <NumberInput source="_version" />
            <TextInput source="_deleted" />
            <NumberInput source="_lastChangedAt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
            <ArrayInput source="Productos.items"><SimpleFormIterator><TextInput source="id" />
            <TextInput source="tipoProducto" />
            <TextInput source="subProducto" />
            <DateInput source="odc" />
            <TextInput source="descripcionCliente" />
            <TextInput source="prioridad" />
            <TextInput source="Plancha" />
            <TextInput source="ordenID" />
            <TextInput source="responsableActual" />
            <TextInput source="responsables" />
            <TextInput source="estado" />
            <NumberInput source="_version" />
            <TextInput source="_deleted" />
            <NumberInput source="_lastChangedAt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Create>
  );
  
  export default OrdenCreate
  */

  