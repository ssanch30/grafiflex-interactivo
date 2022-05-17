import {ListGuesser, EditGuesser} from 'react-admin'
import ProductCreate from './ProductCreate'
import ProductList from './ProductList'

const ProductEdit = EditGuesser
export default {
    list: ProductList,
    create: ProductCreate,
    edit: ProductEdit,
};


