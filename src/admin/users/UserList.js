import{
    List,
    Datagrid,
    TextField,
    ReferenceField
} from 'react-admin'
//import ProductCreateDialog from './ProductCreateDialog'
import CreateProductDialog from './components/CreateProductDialog'

const UserList = (props)=>{
    return(
    <>
        <List >
            <Datagrid rowClick="edit">
                <TextField source="cedula" />
                <TextField source="nombre" /> 
            </Datagrid>
        </List>
        <CreateProductDialog {...props}/>
    </>
    )
}
export default UserList