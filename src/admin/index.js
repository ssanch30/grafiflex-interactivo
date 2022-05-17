import AdminPanelSettingsIcon  from '@mui/icons-material/AdminPanelSettings';
import CustomerIcon from '@mui/icons-material/Contacts';
import UsersIcon from '@mui/icons-material/PeopleAlt';
import customerList from './customer/CustomerList';
import customerEdit from './customer/CustomerEdit';
import customerCreate from './customer/CustomerCreate'
//import CustomerContactEdit from './customer/tabs/EditContactButton'

const Admin = {
    customerList: customerList,
    customerCreate: customerCreate,
    customerEdit: customerEdit,
    icons: {
      main: AdminPanelSettingsIcon,
      user:UsersIcon,
      customer: CustomerIcon
    }
};

export default Admin
/*
export default {
    customerList: customerList,
    //customerEdit: customerEdit,
    //customerCreate: customerCreate,
    //customerContactEdit: CustomerContactEdit,
    icons: {
      main:AdminIcon,
      user:UsersIcon,
      customer: CustomerIcon
    }
};
*/