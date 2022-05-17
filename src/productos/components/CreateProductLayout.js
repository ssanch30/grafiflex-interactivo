import React, { useState, useEffect } from "react";
import {  TextInput, useGetList, required, ReferenceInput, AutocompleteInput, FormDataConsumer,
            RadioButtonGroupInput, useDataProvider } from "react-admin";
import  { AmplifyFileInput }  from "../../Amplify";
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {useFormContext, useWatch} from 'react-hook-form';

import AddBrand from "./AddBrand"


//window.LOG_LEVEL = 'DEBUG';
//const logger = new Logger('foo');
const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
}));
const optionRenderer = choice => `${choice.id} - ${choice.nombre}`;

const CreateProductLayout = (props) => {
    const {isCustomerDisabled} = props
    const [clientSelected, setClientSelected] = useState(0)
    const [client, setClient] = useState();

    const { data, total, isLoading, error } = useGetList(
        'Productos',
        { 
            pagination: { page: 1, perPage: 10 },
        }
    );

    const classes = useStyles();

    return(
        <Grid container direction='row' spacing={3} alignItems='center'>
            <Grid item  md={7}>
                <ReferenceInput source='clienteID' reference='Clientes'>
                    <AutocompleteInput filterToQuery={searchText => (searchText ? { q: searchText } : {})} label='Cliente' variant='outlined' optionText='razonSocial' disabled={isCustomerDisabled} validate={required()} /> 
                </ReferenceInput>
            </Grid>
            <Grid item md={7}>
                <FormDataConsumer >
                    {({ formData , ...rest }) => formData.clienteID ? (
                        <Grid item container spacing={2}>
                        <Grid item md={7}>
                            <TextInput variant='outlined' label='Nombre del Producto' source='nombre' fullWidth/>
                        </Grid>
                        <Grid item md={5}>
                            <BrandSelect 
                                key={formData.clienteID}
                                source='marca'
                                fData={formData}
                                clienteID={formData.clienteID}
                                setCliente={setClient}
                                cliente={client}/>
                        </Grid>
                        <Grid item md={8}>
                            <RadioButtonGroupInput 
                                parse={v=>parseInt(v)}
                                source ='productoNuevo'
                                label=''  
                                choices={[{id:'1', name:"Producto Nuevo"},{id:'0', name: 'Actualizar Producto Existente'}]}
                                defaultValue={0}
                                />
                        </Grid>
                        <Grid item md={12}>                       
                            {formData && formData.productoNuevo === 0 ?(
                                    <AutocompleteInput source='productoRefID' label='Producto' variant='outlined' choices={data} optionText={optionRenderer} validate={required()}/>
                                    ):(
                                null //console.log(formData)
                                )}
                        </Grid>
                    </Grid>
                        ):(null)
                    }
                </FormDataConsumer>
            </Grid>

            <Grid item md={5} container  direction='column' >
                <Grid item  >
                    <AmplifyFileInput
                        label='Archivo Principal'
                        source="mainFiles"
                        multiple={false}
                    />
                </Grid>
                <Grid item  >
                    <AmplifyFileInput 
                            label="Archivos Auxiliares"
                            source="auxFiles"
                            multiple={true}
                            variant='outlined'
                        />
                </Grid> 
            </Grid>

        </Grid>
    )
}

const BrandSelect = (props) => {
    const { clienteID, fData , cliente , setCliente} = props
    const {setValue}= useFormContext()
    const dataProvider = useDataProvider();
    //const [cliente, setCliente] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    

    useEffect(() => {
        dataProvider.getOne('Clientes', { id: clienteID })
            .then(({ data }) => {
                setCliente(data)
                //console.log(data)
                const arr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','9','8','7','6','5','4','3','2','1']
                const newId = data.codigo +'-'+ (new Date().getFullYear()-2020).toString()+ arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]
                setValue('id', newId)
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    /// USE useEffectHook to update  the CLient ID and the Product ID!!!!!!!!!!!!!!!!!!!!

   // if (loading) return <Loading />;
    //if (error) return <Error />;
    if (!cliente) return null;

    return (
        <ReferenceInput filter={{marcasByCliente:{clienteID:cliente.id}}} source='marcaID' reference='Marcas'>
            <AutocompleteInput fullWidth  optionText='nombre' variant='outlined' label='Marca'  create={<AddBrand label="Crear Nueva Marca" cliente={cliente} />}/>
        </ReferenceInput>
    )
}


export default CreateProductLayout


/*
                        <Grid item container spacing={2}>
                            <Grid item md={7}>
                                <TextInput variant='outlined' label='Nombre del Producto' source='nombre' fullWidth/>
                            </Grid>
                            <Grid item md={5}>
                                <BrandSelect key={formData.clienteID} source='marca' fData={formData} clienteID={formData.clienteID}  setCliente={setClient} cliente={client}/>
                            </Grid>
                            <Grid item md={8}>
                                <RadioButtonGroupInput  source ='productoNuevo' label=''  choices={[{id:1, name:"Producto Nuevo"},{id:0, name: 'Actualizar Producto Existente'}]} defaultValue={0}/>
                            </Grid>
                            <Grid item md={12}>                       
                                {formData && formData.productoNuevo === 0 ?(
                                    <ReferenceInput filter={{productosByCliente:{clienteID:client.id}}}  source='id'   reference='Productos'> 
                                        <AutocompleteInput label='Producto' variant='outlined' optionText='nombre' validate={required()}/>
                                    </ReferenceInput>
                                ):(formData.productoNuevo === 1 ?(
                                    null//console.log(formData)
                                    ):(null))}
                            </Grid>
                        </Grid>

*/