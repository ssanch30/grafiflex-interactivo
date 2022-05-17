import './App.css';
import { buildAuthProvider, LoginPage, buildDataProvider } from './Amplify'
import { Admin, Resource, localStorageStore } from 'react-admin'
import  administrator  from './admin'
import  product  from './productos'
import  orden from './orden'

import * as mutations from './graphql/mutations'
import * as queries  from './graphql/queries'
import awsExports from "./aws-exports"
import LayoutCont from './Main/containers/Layout'
import { createTheme } from '@mui/material/styles';

const store = localStorageStore();
store.setItem('sidebar.open', false);


const theme = createTheme({
  palette: {
    primary:{main: "#2c2c2c" },
    secondary: {main: "#212121"},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  }
);



const authProvider = buildAuthProvider({ authGroups: ["root"] })
const dataProvider = buildDataProvider(
                                        {queries, mutations},
                                        {
                                        authMode: 'API_KEY', 
                                        storageBucket: awsExports.aws_user_files_s3_bucket,
                                        storageRegion: awsExports.aws_user_files_s3_bucket_region,
                                        enableAdminQueries: true})




const App = () => (
    <Admin  authProvider={authProvider} loginPage={LoginPage} dataProvider={dataProvider} layout={LayoutCont} theme={theme} store={store}>
      <Resource name="Clientes" list={administrator.customerList} create={administrator.customerCreate} edit={administrator.customerEdit} />
      <Resource name="Productos" list={product.list} create={product.create} />
      <Resource name="Marcas"/>
      <Resource name="Ordens" list={orden.list} edit={orden.edit} create={orden.create}/>
    </Admin>
);

export default App;




/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/