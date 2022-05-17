import React, { useState, useEffect } from "react";
import { TextInput, required, ReferenceInput,AutocompleteInput, FormDataConsumer, RadioButtonGroupInput, Form, useDataProvider, Loading, Error , useQuery} from "react-admin";
import { AmplifyFileInput, AmplifyImageInput} from "../Amplify";
import { Grid, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {useForm} from 'react-hook-form';
import SelectProductByType from "./components/SelectProductType";

import AddBrand from "./components/AddBrand"


//window.LOG_LEVEL = 'DEBUG';
//const logger = new Logger('foo');
const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
}));



const ProductCreateDialog = (props) => {
    const [clientSelected, setClientSelected] = useState(0)
    const [client, setClient] = useState();
    const handleClientSelection=()=>{
        setClientSelected(1)  
    }
    const classes = useStyles();
    
 

    return(
    <Dialog {...props} fullWidth maxWidth='lg'>
        <Form redirect='list' className={classes.root}>
            <Grid container direction='row' fullWidth spacing={3}>
                <Grid item  md={7}>
                <ReferenceInput variant='outlined' label='Cliente' source='clienteID' reference='Clientes' fullWidth >
                    <AutocompleteInput  optionText='razonSocial'  validate={required()} onChange={handleClientSelection}/> 
                </ReferenceInput>
                <FormDataConsumer >
                    {({ formData , ...rest }) => formData.clienteID ? (
                        <Grid item container spacing={2}>
                            <Grid item md={7}>
                                <TextInput variant='outlined' label='Nombre del Producto' source='nombre' fullWidth/>
                            </Grid>
                            <Grid item md={5}>
                                <BrandSelect key={formData.clienteID} source='marca' fData={formData} clienteID={formData.clienteID}  setCliente={setClient} cliente={client}/>
                            </Grid>
                            <Grid item md={8}>
                                <RadioButtonGroupInput fullWidth source ='productoNuevo' label='' validate={required()} choices={[{id:1, name:"Producto Nuevo"},{id:0, name: 'Actualizar Producto Existente'}]} />
                            </Grid>
                            <Grid item md={12}>                       
                                {formData && formData.productoNuevo === 0 ?(
                                    <ReferenceInput filter={{productosByCliente:{clienteID:client.id}}} label='Producto' source='id' variant='outlined'  reference='Productos'> 
                                        <AutocompleteInput fullWidth optionText='nombre' validate={required()}/>
                                    </ReferenceInput>
                                ):(formData.productoNuevo === 1 ?(
                                        console.log(formData.id)

                                    ):(null))}
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
                    <Grid item>
                        <AmplifyFileInput 
                                label="Archivos Auxiliares"
                                source="auxFiles"
                                multiple={true}
                                variant='outlined'
                            />
                    </Grid> 
                </Grid>
            </Grid>
        </Form> 
    </Dialog>
    )
};


const BrandSelect = (props) =>{
    const { clienteID, fData , cliente , setCliente} = props
    const { register, setValue } = useForm()
    const dataProvider = useDataProvider();
    //const [cliente, setCliente] = useState();
    

    useEffect(() => {
        dataProvider.getOne('Clientes', { id: clienteID })
            .then(({ data }) => {
                setCliente(data)
                const arr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','9','8','7','6','5','4','3','2','1']
                const newId = data.codigo +'-'+ (new Date().getFullYear()-2020).toString()+ arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]
                register('id')              
                setValue('id', newId)
            })

    }, []);

    /// USE useEffectHook to update  the CLient ID and the Product ID!!!!!!!!!!!!!!!!!!!!

   // if (loading) return <Loading />;
    if (!cliente) return null;

    return (
        <ReferenceInput filter={{marcasByCliente:{clienteID:cliente.id}}}  variant='outlined' label='Marca' source='marcaID' reference='Marcas' fullWidth>
            <AutocompleteInput  variant='outlined' fullWidth optionText='nombre'  label='Marca'   create={<AddBrand label="Crear Nueva Marca" cliente={cliente} />}/>
        </ReferenceInput>
    )

    
}


export default ProductCreateDialog