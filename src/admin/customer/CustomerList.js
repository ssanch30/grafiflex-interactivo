
import {useListContext, useRecordContext} from 'ra-core'
import get from 'lodash/get';

import {
    List, 
    Datagrid,
    TextField,
    FunctionField,
    BooleanField,
    DateField

} from 'react-admin'


const CustomerList = props => {
    const {data} = useListContext(props)
    return(
    <List title='Clientes'{...props} >
        <Datagrid rowClick="edit">
            <FunctionField
            label="NIT"
                render={record => `${record.nit_cedula}-${record.digitoVerificacion}`}
            />;
    
            <TextField source="razonSocial" label='Razon Social'/>
            <TextField source="direccion" />
        </Datagrid>
    </List>
    );
}

export default CustomerList