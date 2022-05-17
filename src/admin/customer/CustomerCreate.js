
import React from 'react'
import {
        Create,
        TabbedForm,
        } from 'react-admin';

import { Billing } from './tabs/CustomerBilling';
import { General } from './tabs/CustomerGen'
import { Machines } from './tabs/CustomerMachines'


const CustomerCreate = props => {
    return(
    <Create {...props} title='Crear Nuevo Cliente' >
        <TabbedForm fullWidth >
            <General label = 'General' type='create'/>
            <Machines label='maquinas'/>  
            <Billing label='Facturacion'/>
        </TabbedForm>
    </Create>
)
}

//<Contacts  label ='Contactos'/>


export default CustomerCreate
