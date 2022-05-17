import OrderIcon from '@mui/icons-material/Ballot';
import OrdenList from './OrdenList';
import OrdenEdit from './OrdenEdit';
import OrdenCreate from './OrdenCreate';
import PendingIcon from '@mui/icons-material/AssignmentLateRounded'
import SearchIcon from '@mui/icons-material/LocationSearching'

export default {
    list: OrdenList,
    create: OrdenCreate,
    edit: OrdenEdit,
    icons: {
        main: OrderIcon,
        pendientes: PendingIcon,
        buscar: SearchIcon 
    }
};