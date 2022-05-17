import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import {
    AutocompleteInput,
    NumberInput,
    AutocompleteArrayInput,
    TextInput,
    required,
    SelectInput,
    FormDataConsumer,
    FormTab,
    BooleanInput } from 'react-admin';
import {TiposDocumentos, Sectores, CountryList, CityList, StateList, Sucursales, TiposPersonas} from '../../../utils'
import { useForm, useWatch } from 'react-hook-form';





export const General = props => {
    const classes = useStyles();

    return(
        <FormTab {...props}    >
            <Grid container direction="column" justifyContent="center" alignItems='center' rowSpacing = {1} className={classes.root} >
                <Grid item xs={12} container direction='row' spacing={3}>
                    <Grid item sm={12} md={6} >
                        <Grid item container direction='row' justifyContent='space-between'>
                            <Grid item >
                                <SelectInput width='100%' source="datosFacturacion.tipoPersonaAdq" label='Tipo Persona' variant='outlined' defaultValue={'JURIDICA'} choices={TiposPersonas} />
                            </Grid>
                            <Grid item > 
                                <SelectInput source= 'sucursalEncargada' variant='outlined' label = 'Sucursal' defaultValue={'ENVIGADO'} choices={Sucursales}
                                    /> 
                            </Grid>
                            <Grid item > 
                                <BooleanInput source= 'estado' variant='outlined' label = 'Activo'/> 
                            </Grid>
                        </Grid>

                        <Grid item ><Typography variant ='h4'>Información General</Typography> </Grid>

                        <Grid item xs={12}>
                            <FormDataConsumer>
                                {({ formData, ...rest }) => formData.datosFacturacion && formData.datosFacturacion.tipoPersonaAdq === 'JURIDICA' ?
                                    (<Grid item xs={12} container  justifyContent='flex-start'  spacing={2}  >
                                        <Grid item xs={12} md={5}> <SelectInput fullWidth source = 'tipoDocumento' defaultValue='NIT' choices={TiposDocumentos} variant='outlined'/> </Grid>
                                        <Grid item xs={10} md= {5}> <TextInput  fullWidth source = 'nit_cedula' variant='outlined'/> </Grid>
                                        <Grid item xs={2}> <NumberInput  source = 'digitoVerificacion' label='D. Verif' variant='outlined'/> </Grid>
                                        <Grid item xs={8}md={8}> <TextInput  fullWidth source = 'razonSocial' variant='outlined'/> </Grid>
                                        <Grid item xs={4}md={4}> <TextInput  fullWidth source = 'codigo' variant='outlined' validate={props.type==='create'?(required()):(false)} disabled={props.type==='edit'?(true):(false)}/> </Grid>
                                    </Grid>
                                    ):(  
                                    <Grid item xs={12} container  direction='row' justifyContent='flex-start' spacing={2} rowSpacing={0}>
                                        <Grid item xs={12} md={4}><SelectInput variant='outlined' fullWidth source = 'tipoDocumento' defaultValue='CEDULA_CIUDADANIA' choices={TiposDocumentos}/> </Grid>
                                        <Grid item xs={12} md={6}><TextInput variant='outlined' fullWidth source = 'nit_cedula' label='Cedula'/> </Grid>
                                        <Grid item xs={12} md={5}><TextInput variant='outlined' fullWidth source = 'primerNombre'/> </Grid>
                                        <Grid item xs={12} md={5}><TextInput variant='outlined' fullWidth source = 'segundoNombre'/> </Grid>
                                        <Grid item xs={12} md={5}><TextInput variant='outlined' fullWidth source = 'primerApellido'/> </Grid>
                                        <Grid item xs={12} md={5}><TextInput variant='outlined' fullWidth source = 'segundoApellido'/> </Grid>
                                    </Grid>
                                    )
                                }
                            </FormDataConsumer>
                        </Grid>
                    </Grid>
                    <Grid item md={6} container spacing={1}>
                    <Grid item md={12}><Typography variant ='h4'>Ubicación</Typography> </Grid>
                        <Grid item md={6} sm={12}>
                            <AutocompleteInput format={v =>  parseInt(v)}
                            variant='outlined' fullWidth   source = 'pais' choices ={CountryList}/> </Grid>
                        <Grid item md={6} sm={12}>
                        <FormDataConsumer >
                            { ({ formData, ...rest }) => (
                            <SelectInput variant='outlined' fullWidth source = 'departamento'
                                choices={ formData.pais ? StateList.filter(( element ) => element.id_country === parseInt(formData.pais)):[] }
                                {...rest}
                            />
                            )}
                        </FormDataConsumer>
                        </Grid>
                        <Grid item md={6} sm={12}>
                        <FormDataConsumer >
                            { ({ formData, ...rest }) => (
                            <SelectInput variant='outlined' fullWidth source = 'ciudad'
                                choices={ formData.departamento ? CityList.filter(( element ) => element.id_state === parseInt(formData.departamento)):[] }
                                {...rest}
                            />
                            )}
                        </FormDataConsumer>
                        </Grid>
                        <Grid item md={6} sm={12}><TextInput variant='outlined' fullWidth source = 'direccion'/></Grid>
                        <Grid item md={3} sm={12}><NumberInput variant='outlined' fullWidth source = 'indicativoPais'/></Grid>
                        <Grid item md={3} sm={12}><NumberInput variant='outlined' fullWidth source = 'indicativoCiudad'/></Grid>
                        <Grid item md={6} sm={12}><NumberInput variant='outlined' fullWidth source = 'telefono'/> </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={12} container justifyContent='center'  spacing={2}> 
                    <Grid item sm={9}>
                        <AutocompleteArrayInput  variant='outlined' fullWidth label='Sectores' source='sector' choices={Sectores} translateChoice = {false}/>
                       
                    </Grid>
                    <Grid item sm={3}>

                    </Grid>
                </Grid>
            </Grid> 
        </FormTab>
    )

}

const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        },
    }
));