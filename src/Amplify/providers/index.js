/*import {
    AuthProvider as AuthProviderInterface,
    DataProvider as DataProviderInterface,
  } from "ra-core";*/
  import { AuthProvider } from "./AuthProvider";
  import { DataProvider } from "./DataProvider";
  
  export function buildAuthProvider(
    options
  ){
    const authProvider = new AuthProvider(options);
    return {
      login: authProvider.login,
      logout: authProvider.logout,
      checkAuth: authProvider.checkAuth,
      checkError: authProvider.checkError,
      getPermissions: authProvider.getPermissions,
    };
  }
  

  export function buildDataProvider(operations,options)
  {
    const dataProvider = new DataProvider(operations, options);
  
    return {
      getList: dataProvider.getList,
      getOne: dataProvider.getOne,
      getMany: dataProvider.getMany,
      getManyReference: dataProvider.getManyReference,
      create: dataProvider.create,
      update: dataProvider.update,
      updateMany: dataProvider.updateMany,
      delete: dataProvider.delete,
      deleteMany: dataProvider.deleteMany,
    };
}
    

  /*
  export function buildDataProvider(
    operations,
    options)
    {
    const dataProvider = new DataProvider(operations, options);
  
    return {
      getList: dataProvider.getList,
      getOne: dataProvider.getOne,
      getMany: dataProvider.getMany,
      getManyReference: dataProvider.getManyReference,
      create: dataProvider.create,
      update: dataProvider.update,
      updateMany: dataProvider.updateMany,
      delete: dataProvider.delete,
      deleteMany: dataProvider.deleteMany,
    };
  }*/