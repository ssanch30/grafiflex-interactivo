import React from "react"
import {TextInput, NumberInput, DateInput, ArrayInput,  SimpleForm, SimpleFormIterator, Edit } from 'react-admin'

const OrdenEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="numero" />
            <NumberInput source="version" />
            <TextInput source="nombre" />
            <TextInput source="descripcionCliente" />
            <NumberInput source="_version" />
            <TextInput source="_deleted" />
            <NumberInput source="_lastChangedAt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
            <ArrayInput source="Productos.items"><SimpleFormIterator><TextInput source="id" />
            <TextInput source="tipoProducto" />
            <TextInput source="subProducto" />
            <DateInput source="odc" />
            <TextInput source="descripcionCliente" />
            <TextInput source="prioridad" />
            <TextInput source="Plancha" />
            <TextInput source="ordenID" />
            <TextInput source="responsableActual" />
            <TextInput source="responsables" />
            <TextInput source="estado" />
            <NumberInput source="_version" />
            <TextInput source="_deleted" />
            <NumberInput source="_lastChangedAt" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
  );


  export default OrdenEdit