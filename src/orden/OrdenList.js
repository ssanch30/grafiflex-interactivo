import React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField
} from 'react-admin'


const OrdenList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="numero" />
            <NumberField source="version" />
            <TextField source="nombre" />
            <TextField source="descripcionCliente" />
            <TextField source="productos" />
            <NumberField source="_version" />
            <TextField source="_deleted" />
            <NumberField source="_lastChangedAt" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
  );

export default OrdenList