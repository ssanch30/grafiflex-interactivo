import{
    List,
    Datagrid,
    TextField,
    ReferenceField
} from 'react-admin'
//import ProductCreateDialog from './ProductCreateDialog'
import CreateProductDialog from './components/CreateProductDialog'

const ProductList = (props)=>{
    return(
    <>
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField  label="Cliente" source="clienteID" reference="Clientes">
                    <TextField source="razonSocial" />
                </ReferenceField>
                <TextField source="nombre" />
                <ReferenceField  label="Marca" source="marcaID" reference="Marcas">
                    <TextField source="nombre" />
                </ReferenceField>
            </Datagrid>
        </List>
        <CreateProductDialog {...props}/>
    </>
    )
}

export default ProductList