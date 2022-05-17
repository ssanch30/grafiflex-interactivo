import React from 'react'
import {
        SelectInput,
        AutocompleteInput, 
        TextInput,
        TextField,
        Labeled,
        NumberInput,
        RadioButtonGroupInput
        } 
        from 'react-admin'
import { Field, useForm , useFormContext} from 'react-hook-form' ////PENDING
import { Box, Grid, Typography, Icon } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import MountingView from '../components/MountingView'
import { Card } from '@mui/material'
import { Lineatura, Calibres } from '../../utils'
import PosicionSelector from '../components/PosicionSelector'
import WindingSelector from '../components/WindingSelector'
import  RepIcon  from '../components/img/rep-icon.png'
import  PistasIcon  from '../components/img/pistas-icon.png'
import  Wind1Icon  from '../components/img/winding1-icon.png'
import  Wind2Icon  from '../components/img/winding2-icon.png'
import  Wind3Icon  from '../components/img/winding3-icon.png'
import  Wind4Icon  from '../components/img/winding4-icon.png'
import  Wind5Icon  from '../components/img/winding5-icon.png'
import  Wind6Icon  from '../components/img/winding6-icon.png'
import  Wind7Icon  from '../components/img/winding7-icon.png'
import  Wind8Icon  from '../components/img/winding8-icon.png'



const useStyles = makeStyles(theme => ({
    root: {
        minWidth:'100%',
        marginBottom: theme.spacing(1),
        variant: 'outlined'
    },
    divider:{
        margin: '10px',
        color:'lightGray',
        minHeight:'100%'
    },
    cell:{
            marginRight:'10px'
    },
    Montaje:{
        minWidth:'400px'
    },
    Maquina:{
        minWidth:'300px'
    }
}));


const tabs2Display = {
    ARTE:['TIPOEMPAQUE', 'MONTAJE' ],
    FINALIZACION: ['TIPOEMPAQUE', 'MONTAJE'],
    SHERPA:['SHERPA'],
    COPIADO: ['RIP'],
    REPETICION: ['LEN'],
    MONTAJE:['LEN']
}

const Main = (props)=>{
    const {client, record, formData} = props
    const isGapRDisabled=true
    const classes = useStyles();
    const form = useForm()
    const { setValue } = useFormContext()

    const PositionIcons = [ Wind1Icon, Wind2Icon, Wind3Icon, Wind4Icon,Wind5Icon, Wind6Icon, Wind7Icon , Wind8Icon ]

    const handleFormChange = (event,formData) =>{
        
        let rodillo = event.target.name === 'rodillo'? event.target.value : formData.rodillo || 96
        let desarrollo = event.target.name === 'rodillo'? (event.target.value*25.4/8).toFixed(2) : formData.desarrollo || 304.8
        let repeticiones = event.target.name === 'repeticiones' ? event.target.value : formData.repeticiones || 2
        let Alto = event.target.name === 'prodAlto' ? event.target.value : formData.prodAlto || 100
        let Ancho = event.target.name === 'prodAncho' ? event.target.value : formData.prodAncho || 100
        let posicion = event.target.name === 'posicion' ? event.target.value : formData.posicion || '1'
        
        let gapR = 0
        if(posicion && rodillo > 0 && repeticiones>0){
            if (posicion === '1' || posicion === '2'){
                if( Alto ){
                    gapR = (desarrollo/repeticiones)-Alto
                }
            }
            if (posicion === '3' || posicion === '4'){
                if( Ancho ){
                    gapR = (desarrollo/repeticiones)-Ancho
                }
            }
        }

        setValue('desarrollo', desarrollo)
        setValue('gapRepet', gapR.toFixed(2))
    }
    const findPlanchas=(formData,client)=>{
        return client.maquinas.find(x=>x.nombre === formData.maquina).plancha.map(plancha=>Calibres.find(y=> y.id===plancha))
    }
    return (
        <Grid container direction='row'  justifyContent='space-evenly'>    
            <Grid item lg={12} >
                <Card>
                    <Grid container direction='row' spacing={2}>
                        <Grid item>
                            <SelectInput source='maquina' choices={client.maquinas} optionText='nombre' optionValue='nombre' variant='outlined'/> 
                        </Grid>
                    {
                        formData.maquina ?(
                            <Grid item md={6} container  spacing={2} direction='row'>
                                <Grid item>
                                    <AutocompleteInput 
                                        variant='outlined' 
                                        source='calibre' 
                                        label='Calibre' 
                                        choices={ findPlanchas(formData, client)}
                                        defaultValue = { findPlanchas(formData, client).length === 1 ? findPlanchas(formData, client)[0].id : '' }
                                        />                  
                                </Grid>
                                <Grid item>
                                    <AutocompleteInput variant='outlined' source='lpi' label='LPI' choices={ client.maquinas.find(x=>x.nombre === formData.maquina).lpis.map(lpis=>Lineatura.find(y=> y.id===lpis))}/>                  
                                </Grid>
                            </Grid>
                        ):(null)
                    }
                    </Grid>
                </Card>
            </Grid>
            <Grid item sm={12} md={9} lg={12} >
                <Card>
                    <Grid container  className={classes.root}  direction="row"
                            justifyContent="space-around"
                            alignItems="center">
                        <Grid item md={7} container direction='column'>
                            <Grid item >
                                <Typography variant ='h6' >Parámetros del Producto</Typography>
                            </Grid>
                            <Grid item container direction='row' >
                                <Grid item md={3} className={classes.cell}  >
                                    <NumberInput label='Ancho' source='prodAncho' variant='outlined' onChange={(e)=>handleFormChange(e, formData)}/>
                                </Grid>
                                <Grid item md={3}>
                                    <NumberInput label='Alto' source='prodAlto' variant='outlined' className={classes.cell} onChange={(e)=>handleFormChange(e, formData)}/>
                                </Grid>
                                <Grid item md={2}>
                                    <NumberInput label='Radio' source='radio' variant='outlined'/>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography label='Alto' variant='h6' > Parámetros de Montaje</Typography>
                            </Grid>
                            <Grid item container  direction='row' minWidth='100%'  justifyContent='flex-start' >
                                <Grid item md={3}  >
                                    <NumberInput source='rodillo' variant='outlined' className={classes.cell} onChange={(e)=>handleFormChange(e, formData)} />
                                </Grid>
                                <Grid  item md={3}>
                                    <NumberInput source="desarrollo"  label="Desarrollo" disabled={isGapRDisabled} variant='outlined' />
                                </Grid>
                            </Grid>
                            <Grid item container alignItems='flex-end' justifyContent='space-between'>
                                <Grid item md={5}> 
                                    <PosicionSelector   label='Posición' 
                                                        source ='posicion' 
                                                        formData={formData}
                                                        {...props}
                                                        onChange={(e)=>handleFormChange(e, formData)}
                                                        />
                                </Grid>
                                <Grid item md={3}> 
                                    <WindingSelector   label='Embobinado' 
                                                        source ='embobinado' 
                                                        formData={formData}
                                                        {...props}
                                                        />
                                </Grid>
                                <Grid item md={3} className={classes.cell} >
                                    <Box sx={{margin:'10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='70px'height='55px'>
                                            <g>
                                                <image href={PositionIcons[(((Math.abs(parseInt(formData.posicion)*(parseInt(formData.embobinado)-2)))+(((parseInt(formData.embobinado)-1)*(parseInt(formData.posicion)+4))))-1)]} x='0' y='0' height={'100%'} />
                                            </g>
                                        </svg>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container direction='row' justifyContent='space-between'>
                                <Grid item md={3} className={classes.cell} >
                                    <NumberInput label='Repeticiones' source='repeticiones' onChange={(e)=>handleFormChange(e, formData)}  variant='outlined'/>
                                </Grid>
                                <Grid item  md={3}>
                                    <NumberInput label='Gap Avance' source='gapRepet' variant='outlined' disabled />
                                </Grid>
                                <Grid item md={3} className={classes.cell} >
                                    <Box sx={{margin:'10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='70px'height='55px'>
                                            <g>
                                                <image href={RepIcon} x='0' y='0' width={'100%'} />
                                            </g>
                                        </svg>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container direction='row' justifyContent='space-between' >
                                <Grid item md={3} className={classes.cell} >
                                    <NumberInput  label='Pistas' source='pistas' variant='outlined'/>
                                </Grid>
                                <Grid item md={3} >
                                    <NumberInput label='Gap Ancho' source='gapPistas' variant='outlined'/>
                                </Grid>
                                <Grid item md={3} className={classes.cell} >
                                    <Box sx={{margin:'10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width='70px'height='55px'>
                                            <g>
                                                <image href={PistasIcon} x='0' y='0' width={'100%'} />
                                            </g>
                                        </svg>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={5}   >
                            <MountingView formData={formData}/>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            
        </Grid>
    )
}

export default Main