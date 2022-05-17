import * as React from 'react';
import { useEffect } from 'react';
import { useDataProvider, CheckboxGroupInput } from 'react-admin';
import {useForm} from 'react-hook-form'

const SelectProductByType = ( props) => {
    const {clientId, handleSetClient, client , children,formData, source, index, ...rest } = props;
    const {register, setValue}=useForm()
    const dataProvider = useDataProvider();

    useEffect(() => {
        dataProvider.getOne('Clientes', { id: clientId })
            .then(({ data }) => {
                handleSetClient(data);
            })
            .catch(error => {
                
            })
    }, []);
    const handleProductSelection=()=>
    {   
        const arr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','9','8','7','6','5','4','3','2','1']
        const newId = client.codigo +'-'+ (new Date().getFullYear()-2020).toString()+ arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]+arr[Math.floor(Math.random()*arr.length)]
        register('id')
        setValue('id', newId)
    }
 
    if (!client) return null;
    
    return (
        <CheckboxGroupInput variant = 'outlined' label='Seleccione los Productos' source = 'tiposOrdenes' choices={client.datosFacturacion.precioOrden} optionText='tipoOrden' onClick={handleProductSelection} optionValue='tipoOrden'/>
    )
};



export default SelectProductByType


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