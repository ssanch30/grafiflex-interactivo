import{
    Edit,
    TabbedForm,
    useMutation,
    TopToolbar, 
    ListButton,
    ShowButton
} from 'react-admin'
import { Billing } from './tabs/CustomerBilling';
import { General } from './tabs/CustomerGen'
import { Machines } from './tabs/CustomerMachines'
//import { Contacts } from './tabs/CustomerContact'
    


import ChevronLeft from '@mui/icons-material/ChevronLeft';
const CustomerEditActions = () => (
    <TopToolbar>
        <ListButton label="Volver" icon={<ChevronLeft />} />
        <ShowButton />
    </TopToolbar>
);

const EditTitle = ({ record }) => {
    return <span>Editar Cliente: {record ? `${record.razonSocial}` : ''}</span>;
};

const editTransform = ({ productos, marcas, ordenes, ...data }) => {
    return(
    {
    ...data,
    })}


const CustomerEdit = props => {
    return(
    <Edit {...props} title={<EditTitle/>} actions={<CustomerEditActions />} transform={editTransform} redirect='list'>
        <TabbedForm fullWidth>
            <General label='General' type='edit'/>
            <Machines label='maquinas'/>  
            <Billing label='Facturacion'/>
            
        </TabbedForm>
    </Edit>
    )
}
 
export default CustomerEdit

/*
            <Billing label = 'Facturacion'/>
            <Machines source='maquinas'/>  
            <Contacts  label ='Contactos'/>
*/