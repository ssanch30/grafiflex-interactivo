import {  Grid } from '@mui/material';
import React from 'react'
import {
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    AutocompleteArrayInput,
    TextInput,
    SelectInput,
    FormDataConsumer,
    FormTab,
    } from 'react-admin';
import { Calibres, Lineatura} from '../../../utils'
import { useForm } from 'react-hook-form'

export const Machines = props => {
    const {register, setValue} = useForm()
    
    const handlePasoTypeChange=(e)=>{
        if(e==='desarrollo') {
            register('paso')
            setValue('paso', 1);
        }
        else{
            register('paso')
            setValue('paso', 3.175);
            
        }
    }
    return(
        <FormTab {...props}  label = 'Máquinas' >
            <ArrayInput source="maquinas">
                <SimpleFormIterator >
                    <FormDataConsumer>
                        {({ getSource, scopedFormData, index }) => {
                            return (
                                <Grid container direction = 'row' justifyContent='space-between' alignItems='baseline' spacing ={1}>
                                    <Grid item md={4}>
                                        <TextInput fullWidth
                                            source={getSource('nombre')}
                                            label='Nombre/Marca Máquina'
                                            record={scopedFormData}
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <SelectInput fullWidth
                                            source={getSource('tipoMaquina')}
                                            record={scopedFormData}
                                            label='Tipo de Máquina'
                                            variant='outlined'
                                            choices={[
                                                {id:'TAMBOR_CENTRAL', name: 'Tamor Central'},
                                                {id:'INLINE', name: 'In-Line'},
                                                {id:'STACK', name: 'Stack'},
                                            ]}
                                        />
                                    </Grid> 
                                    <Grid item md={4}>
                                        <SelectInput fullWidth
                                            source={getSource('tipoDesarrollo')}
                                            record={scopedFormData}
                                            label='Tipo Desarrollo'
                                            variant='outlined'
                                            onChange={e=>handlePasoTypeChange(e)}
                                            choices={[
                                                {id:'paso', name: 'Paso'},
                                                {id:'desarrollo', name: 'Desarrollo'},
                                            ]}
                                        />
                                    </Grid>
                                    {
                                        scopedFormData && scopedFormData.tipoDesarrollo === 'paso' ?
                                        <Grid item md={2}>
                                            <SelectInput fullWidth
                                                    source={getSource('paso')}
                                                    record={scopedFormData}
                                                    label='Paso'
                                                    variant='outlined'
                                                    choices={[
                                                        {id: 3.175, name: '1/8'},
                                                        {id: 2.49364, name: '1/32'},
                                                        {id: 3.236, name: 'ID ARTES IBHIRAMA'},
                                                        {id: 1.66243, name: 'TOPASA T600'}
                                                    ]}
                                                />
                                        </Grid>
                                       :(<span/>)
                                    }
                                    <Grid item md={2}>
                                        <NumberInput fullWidth
                                            source={getSource('anchoBanda')}
                                            label='Ancho de Banda (mm)'
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item md={2}>
                                        <NumberInput
                                            fullWidth
                                            source={getSource('velocidad')}
                                            label='Velocidad m/min'
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <AutocompleteArrayInput 
                                            fullWidth
                                            source={getSource('lpis')}
                                            label='LPI(s)'
                                            choices={Lineatura}
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <AutocompleteArrayInput fullWidth
                                            variant='outlined' 
                                            source={getSource('plancha')}
                                            label='Calibre(s)' 
                                            choices={Calibres}/>
                                    </Grid>{

                                    //<Grid item md={12}>
                                      //  <TextInput label='rodillos' source = 'rodillos' variant='outlined'/>
                                    //</Grid>
                                    }
                                </Grid>
                            );
                        }}
                    </FormDataConsumer>
                </SimpleFormIterator>
            </ArrayInput>
        </FormTab>
    )

}




export default SimpleFormIterator;
