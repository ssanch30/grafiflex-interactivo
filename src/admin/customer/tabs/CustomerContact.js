import React, { useState, useCallback} from 'react'; 
import { useWatch } from 'react-hook-form'
import {
    Datagrid,
    TextField,
    EmailField,
    ArrayField,
    FormTab,
    Button,
    SimpleFormIteratorContext,
    } from 'react-admin';

import  AddContactButton  from './AddContactButton2';
//import EditContactButton from './EditContactButton';

const CustomEmpty = ()=>{
  return(
    <div>
      Este cliente aun no tiene contactos asociados
    </div>
  )
}

export const Contacts = (props) => {

  const [version, setVersion] = useState(0);
  const handleChange = useCallback(() => setVersion(version + 1), [version]);
  let currentRecord = useWatch('contactoClientes')
    return(
      <FormTab {...props}  label = 'Contactos' >
        <ArrayField source='contactoClientes'>
          <Datagrid empty={<CustomEmpty />}>
              <TextField source="nombre" />
              <EmailField source="email" />
              <TextField source="cel"/>
              <TextField source="cargo" />
              <TextField source="userID" />
          </Datagrid>
        </ArrayField>
        <AddContactButton variant='filled' source='contactoClientes' contactAdded={()=>handleChange} currentRecord={currentRecord}/>
    </FormTab>
  )
}
// 

//<AddContactButton  onChange={handleChange}/>
  //                  <EditContactButton onChange={handleChange} />

export default Contacts;