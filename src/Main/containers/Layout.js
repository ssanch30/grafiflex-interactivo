// in src/MyLayout.js
import { Layout } from "react-admin";
import AppBarComp from '../components/AppBar';
import CustomMenu from './Menu';

//import MyMenu from './MyMenu';
//import MyNotification from './MyNotification';

const LayoutCont = props => <Layout
    {...props}
    appBar={AppBarComp}
    sidebar={CustomMenu}
//    menu={MyMenu}
//    notification={MyNotification}
/>;

export default LayoutCont;