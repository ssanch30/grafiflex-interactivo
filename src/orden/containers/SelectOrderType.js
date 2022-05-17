import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDataProvider, Loading, Error, CheckboxGroupInput, RadioButtonGroupInput, ReferenceInput, choices, FormDataConsumer } from 'react-admin';
import { Typography, Grid, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import get from 'lodash/get';
import {useForm} from 'react-hook-form'

const SelectOrderType = ( props) => {
    const {clientId, handleSetClient, client , children,formData, source, index, ...rest } = props;
    const form2=useForm()
    const dataProvider = useDataProvider();

    useEffect(() => {
        dataProvider.getOne('Clientes', { id: clientId })
            .then(({ data }) => {
                handleSetClient(data);
            })
            .catch(error => {
                
            })
    }, []);



    const handleOrderSelection=()=>
    {   
        const arr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','9','8','7','6','5','4','3','2','1']
        
        const newId = client.codigo +'-'+ (new Date().getFullYear()-2020).toString()+ arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]
        form2.change('id', newId)
    }
 
    if (!client) return null;
    //console.log(client)
    return (
        <CheckboxGroupInput variant = 'outlined' label='Seleccione el tipo de Orden' source = 'tipoOrden' choices={client.datosFacturacion.precioOrden} optionText='tipoOrden' /*onClick={handleOrderSelection}*/ optionValue='tipoOrden' />
    )
};



export default SelectOrderType


/* 
<Grid container spacing={3}>
            {client.datosFacturacion.precioProducto.map((client, index)=>(
                <Grid item md={6}>
                    <Button fullWidth variant="outlined" 
                        key={get(client,'tipoProducto')}
                        onClick={handleSelection}
                    > {client.tipoProducto }
                     </Button>
                </Grid>
            ))}

        </Grid>

*/