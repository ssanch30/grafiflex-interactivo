import { Typography, Grid } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import React from 'react'
import {
        ArrayInput,
        SimpleFormIterator,
        NumberInput,
        SelectInput,
        FormDataConsumer,
        FormTab,
        BooleanInput } from 'react-admin';
import {TiposOrdenes,TiempoPago, RegimenAdq} from '../../../utils'

/*
type DatosFacturacion {
  formaPago: String
  iva: Boolean
  variacionTRM: Boolean
  validarCxC: Boolean
  retefuenteType: String
  retefuentePorc: Float
  reteIvaPorc: Float
  precioProducto: [PrecioProductos]
  regimenAdq: RegimenAdq
  tipoPersonaAdq: TipoPersonaAdq
*/

export const Billing = (props)=>{
    const classes = useStyles();
    return (
    <FormTab {...props} label = 'Facturación' resource='Clientes'>
        <Grid  container direction='column' className={classes.root} minHeight='300'>
            <Grid item xs={12} container direction='row' justifyContent='flex-start' alignItems='center'>
                <Grid item md={2} sm={12}>
                    <Typography justify='right' variant ='h5'> General </Typography>
                </Grid>
                <Grid item md={2} sm={6}><SelectInput variant='outlined' source='datosFacturacion.formaPago' defaultValue={'30_DIAS'} label = 'Tiempo de Pago' choices={TiempoPago}/></Grid>
                <Grid item md={2} sm={6}><SelectInput variant='outlined' source='datosFacturacion.regimenAdq' label='Régimen' choices={RegimenAdq} /></Grid>
                <Grid item md={2} sm={4}><BooleanInput variant='outlined' source='datosFacturacion.iva' label = 'Facturar con Iva' /></Grid>
                <Grid item md={2} sm={4}><BooleanInput source='datosFacturacion.variacionTRM' label='Variación TRM'/></Grid>
                <Grid item md={2} sm={4}><BooleanInput source='datosFacturacion.validarCxC' label='Validar CxC'/></Grid>       
            </Grid>
            <Grid item xs={12} container direction='row' justifyContent='flex-start' spacing={3} alignItems='center'>
                <Grid item md={2} sm={12}>
                    <Typography  justify='right' variant ='h5'> Retenciones </Typography>
                </Grid>
                <Grid item md={4} sm={12} container  direction='row' spacing={1} justifyContent='flex-start'>
                    <Grid item  md={9}>
                        <SelectInput variant='outlined' fullWidth source='datosFacturacion.retefuenteType'
                        choices={[
                            {id:'servicios', name:'Servicios'},
                            {id:'compras', name: 'Compras'}
                        ]}
                        label='Compras/Servicios'
                        
                        />
                    </Grid>
                    <Grid item md={3}><NumberInput variant='outlined' source='datosFacturacion.retefuentePorc' label='%'/></Grid>
                </Grid>
                <Grid item sm={4} md={2}><NumberInput variant='outlined' source='datosFacturacion.reteIvaPorc' label='ReteIVA %'/></Grid>
                <Grid item sm={4} md={2} ><NumberInput variant='outlined' source='datosFacturacion.reteIcaPorc' label='ReteICA %'/></Grid>  
            </Grid>
            <Grid item xs={12} container direction='row' justifyContent='flex-start' spacing={3} alignItems='center'>
                <Grid item md={12} sm={12}>
                    <Typography  justify='center' variant ='h5'>Precios</Typography>
                </Grid> 
                <Grid item xs={12} container direction='row'>
                    <ArrayInput source='datosFacturacion.precioOrden' label='Precios Ordenes por Tipo' >
                        <SimpleFormIterator >
                                <SelectInput variant='outlined' source='tipoOrden' label='Orden' choices={TiposOrdenes} size='small'/>
                            <FormDataConsumer>
                                            {({
                                                formData, // The whole form data
                                                scopedFormData, // The data for this item of the ArrayInput
                                                getSource, // A function to get the valid source inside an ArrayInput
                                                index,
                                                ...rest
                                                }) => 
                                                scopedFormData ?
                                                (TiposOrdenes.find( ( element ) => element.id === scopedFormData.tipoOrden) ?(
                                                    TiposOrdenes.find( ( element ) => element.id === scopedFormData.tipoOrden).valores ?
                                                        (
                                                                <SubProductosArrayForm
                                                                    newSource={getSource('valores')} 
                                                                    prodType = {scopedFormData.tipoOrden}
                                                                    {...props}
                                                                />
                                                            
                                                            
                                                        ):
                                                        (
                                                            
                                                                <NumberInput variant='outlined'  source={getSource('valor')}  label='Valor'/>
                                                            
                                                        )):
                                                    (null)):
                                                    (null)
                                            }
                            </FormDataConsumer>
                        </SimpleFormIterator>
                    </ArrayInput>
                    </Grid>
                </Grid>
        </Grid>
    </FormTab>
)};

const SubProductosArrayForm = (props)=>{

    const {
        newSource,
        prodType
    }= props    
    return(
    <ArrayInput source={newSource} label=''>
        <SimpleFormIterator >
            <FormDataConsumer>
                {({getSource})=>(
                <Grid container spacing={3}>
                    <Grid item>
                        <SelectInput variant='outlined' source={getSource('tipo')} label='Dificultad' choices={TiposOrdenes.find( ( element ) => element.id === prodType).valores}/>
                    </Grid>
                    <Grid item>
                        <NumberInput variant='outlined'  source={getSource('valor')} label='Valor'/>
                    </Grid>
                </Grid>
                )
                }
            </FormDataConsumer>
        </SimpleFormIterator>
    </ArrayInput>  
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
}));



/*   
                                                TiposProductos.find( ( element ) => element.id === scopedFormData.tipoProducto).subProductos ? 
                                                (   < Grid container direction='row' spacing={1}>
                                                        <Grid item>
                                                            <SelectInput
                                                            label='Subproductos'
                                                            variant='outlined'
                                                            scopedFormData
                                                            source={getSource('subProductos.nombre')}
                                                            choices={TiposProductos.find( ( element ) => element.id === scopedFormData.tipoProducto).subProductos}
                                                            />
                                                        </Grid>
                                                        <Grid item >
                                                            <NumberInput variant='outlined' source={getSource('subProductos.precio')} label='Valor'/>
                                                        </Grid>
                                                    </Grid>
                                                    ) : <NumberInput variant='outlined'  source={getSource('precio')} label='Valor'/>)
                                            :<span>Nothing to display</span>

dfddfd

                                                        <Grid container direction='row' spacing={1}>
                                                            <Grid item>
                                                                <SelectInput
                                                                label='Subproductos'
                                                                variant='outlined'
                                                                scopedFormData
                                                                source={getSource('subProductos.nombre')}
                                                                choices={TiposProductos.find( ( element ) => element.id === scopedFormData.tipoProducto).subProductos}
                                                                />
                                                            </Grid>
                                                            <Grid item >
                                                                <NumberInput variant='outlined' source={getSource('subProductos.precio')} label='Valor'/>
                                                            </Grid>
                                                        </Grid>




const useStyles = makeStyles(
    theme => ({
        root: {
            padding: 0,
            marginBottom: 0,
            '& > li:last-child': {
                borderBottom: 'none',
            },
        },
        line: {
            display: 'flex',
            listStyleType: 'none',
            borderBottom: `solid 1px ${theme.palette.divider}`,
            [theme.breakpoints.down('xs')]: { display: 'block' },
            '&.fade-enter': {
                opacity: 0.01,
                transform: 'translateX(100vw)',
            },
            '&.fade-enter-active': {
                opacity: 1,
                transform: 'translateX(0)',
                transition: 'all 500ms ease-in',
            },
            '&.fade-exit': {
                opacity: 1,
                transform: 'translateX(0)',
            },
            '&.fade-exit-active': {
                opacity: 0.01,
                transform: 'translateX(100vw)',
                transition: 'all 500ms ease-in',
            },
        },
        index: {
            width: '3em',
            paddingTop: '1em',
            [theme.breakpoints.down('sm')]: { display: 'none' },
        },
        form: { flex: 2 },
        action: {
            paddingTop: '0.5em',
        },
        leftIcon: {
            marginRight: theme.spacing(1),
        },
    }),
    { name: 'RaSimpleFormIterator' }
);


                                            */