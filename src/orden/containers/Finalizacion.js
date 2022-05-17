import React from 'react'
import {SelectInput} from 'react-admin'
import { Box } from '@mui/material'


const Finalizacion=(props)=>{
    const {client} = props

    return (
        <Box>
            <SelectInput choices={[{id:'maquina',name:'maquina'}]} label="Maquina" variant='outlined'/>
        </Box>
    )
}

export default Finalizacion