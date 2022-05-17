/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      id
      cedula
      nombres
      email
      roles
      ordenesPendientes {
        items {
          id
          odc
          clienteID
          prioridad
          tipoOrden
          cooimpreso
          Plancha
          ResponsableActualID
          estado
          numeroOPant
          versionOPant
          productoID
          nombreAnt
          createdAt
          updatedAt
        }
        nextToken
      }
      ordenesRealizadas {
        items {
          id
          usuarioID
          ordenID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cedula
        nombres
        email
        roles
        ordenesPendientes {
          nextToken
        }
        ordenesRealizadas {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
      id
      nit_cedula
      codigo
      ciudad
      sector
      marcas {
        items {
          id
          nombre
          productor
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      digitoVerificacion
      estado
      maquinas {
        nombre
        tipoDesarrollo
        tipoMaquina
        paso
        anchoBanda
        velocidad
        plancha
        lpis
      }
      razonSocial
      departamento
      pais
      sucursalEncargada
      direccion
      primerNombre
      segundoNombre
      primerApellido
      segundoApellido
      tipoDocumento
      datosFacturacion {
        formaPago
        iva
        variacionTRM
        validarCxC
        retefuenteType
        retefuentePorc
        reteIvaPorc
        reteIcaPorc
        precioOrden {
          tipoOrden
          unidades
          valor
        }
        regimenAdq
        tipoPersonaAdq
      }
      productos {
        items {
          id
          clienteID
          nombre
          marcaID
          productoNuevo
          productoExistente
          productoRefID
          createdAt
          updatedAt
          marcaProductosId
        }
        nextToken
      }
      ContactoClientes {
        id
        nombre
        email
        cargo
        enviarFactura
        rol
        cel
        userID
      }
      ordenes {
        items {
          id
          odc
          clienteID
          prioridad
          tipoOrden
          cooimpreso
          Plancha
          ResponsableActualID
          estado
          numeroOPant
          versionOPant
          productoID
          nombreAnt
          createdAt
          updatedAt
        }
        nextToken
      }
      indicativoPais
      indicativoCiudad
      telefono
      createdAt
      updatedAt
    }
  }
`;
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nit_cedula
        codigo
        ciudad
        sector
        marcas {
          nextToken
        }
        digitoVerificacion
        estado
        maquinas {
          nombre
          tipoDesarrollo
          tipoMaquina
          paso
          anchoBanda
          velocidad
          plancha
          lpis
        }
        razonSocial
        departamento
        pais
        sucursalEncargada
        direccion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        tipoDocumento
        datosFacturacion {
          formaPago
          iva
          variacionTRM
          validarCxC
          retefuenteType
          retefuentePorc
          reteIvaPorc
          reteIcaPorc
          regimenAdq
          tipoPersonaAdq
        }
        productos {
          nextToken
        }
        ContactoClientes {
          id
          nombre
          email
          cargo
          enviarFactura
          rol
          cel
          userID
        }
        ordenes {
          nextToken
        }
        indicativoPais
        indicativoCiudad
        telefono
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byClienteId = /* GraphQL */ `
  query ByClienteId(
    $id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byClienteId(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nit_cedula
        codigo
        ciudad
        sector
        marcas {
          nextToken
        }
        digitoVerificacion
        estado
        maquinas {
          nombre
          tipoDesarrollo
          tipoMaquina
          paso
          anchoBanda
          velocidad
          plancha
          lpis
        }
        razonSocial
        departamento
        pais
        sucursalEncargada
        direccion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        tipoDocumento
        datosFacturacion {
          formaPago
          iva
          variacionTRM
          validarCxC
          retefuenteType
          retefuentePorc
          reteIvaPorc
          reteIcaPorc
          regimenAdq
          tipoPersonaAdq
        }
        productos {
          nextToken
        }
        ContactoClientes {
          id
          nombre
          email
          cargo
          enviarFactura
          rol
          cel
          userID
        }
        ordenes {
          nextToken
        }
        indicativoPais
        indicativoCiudad
        telefono
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMarca = /* GraphQL */ `
  query GetMarca($id: ID!) {
    getMarca(id: $id) {
      id
      nombre
      productor
      clienteID
      productos {
        items {
          id
          clienteID
          nombre
          marcaID
          productoNuevo
          productoExistente
          productoRefID
          createdAt
          updatedAt
          marcaProductosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMarcas = /* GraphQL */ `
  query ListMarcas(
    $filter: ModelMarcaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarcas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        productor
        clienteID
        productos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const marcasByCliente = /* GraphQL */ `
  query MarcasByCliente(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMarcaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marcasByCliente(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nombre
        productor
        clienteID
        productos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProducto = /* GraphQL */ `
  query GetProducto($id: ID!) {
    getProducto(id: $id) {
      id
      cliente {
        id
        nit_cedula
        codigo
        ciudad
        sector
        marcas {
          nextToken
        }
        digitoVerificacion
        estado
        maquinas {
          nombre
          tipoDesarrollo
          tipoMaquina
          paso
          anchoBanda
          velocidad
          plancha
          lpis
        }
        razonSocial
        departamento
        pais
        sucursalEncargada
        direccion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        tipoDocumento
        datosFacturacion {
          formaPago
          iva
          variacionTRM
          validarCxC
          retefuenteType
          retefuentePorc
          reteIvaPorc
          reteIcaPorc
          regimenAdq
          tipoPersonaAdq
        }
        productos {
          nextToken
        }
        ContactoClientes {
          id
          nombre
          email
          cargo
          enviarFactura
          rol
          cel
          userID
        }
        ordenes {
          nextToken
        }
        indicativoPais
        indicativoCiudad
        telefono
        createdAt
        updatedAt
      }
      clienteID
      nombre
      marca {
        id
        nombre
        productor
        clienteID
        productos {
          nextToken
        }
        createdAt
        updatedAt
      }
      marcaID
      ordenes {
        items {
          id
          productoID
          ordenID
          createdAt
          updatedAt
        }
        nextToken
      }
      productoNuevo
      productoExistente
      productoRefID
      mainFiles {
        bucket
        region
        key
      }
      auxFiles {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      marcaProductosId
    }
  }
`;
export const listProductos = /* GraphQL */ `
  query ListProductos(
    $filter: ModelProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        clienteID
        nombre
        marca {
          id
          nombre
          productor
          clienteID
          createdAt
          updatedAt
        }
        marcaID
        ordenes {
          nextToken
        }
        productoNuevo
        productoExistente
        productoRefID
        mainFiles {
          bucket
          region
          key
        }
        auxFiles {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        marcaProductosId
      }
      nextToken
    }
  }
`;
export const productosByCliente = /* GraphQL */ `
  query ProductosByCliente(
    $clienteID: ID!
    $nombre: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productosByCliente(
      clienteID: $clienteID
      nombre: $nombre
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        clienteID
        nombre
        marca {
          id
          nombre
          productor
          clienteID
          createdAt
          updatedAt
        }
        marcaID
        ordenes {
          nextToken
        }
        productoNuevo
        productoExistente
        productoRefID
        mainFiles {
          bucket
          region
          key
        }
        auxFiles {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        marcaProductosId
      }
      nextToken
    }
  }
`;
export const getOrden = /* GraphQL */ `
  query GetOrden($id: ID!) {
    getOrden(id: $id) {
      id
      cliente {
        id
        nit_cedula
        codigo
        ciudad
        sector
        marcas {
          nextToken
        }
        digitoVerificacion
        estado
        maquinas {
          nombre
          tipoDesarrollo
          tipoMaquina
          paso
          anchoBanda
          velocidad
          plancha
          lpis
        }
        razonSocial
        departamento
        pais
        sucursalEncargada
        direccion
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        tipoDocumento
        datosFacturacion {
          formaPago
          iva
          variacionTRM
          validarCxC
          retefuenteType
          retefuentePorc
          reteIvaPorc
          reteIcaPorc
          regimenAdq
          tipoPersonaAdq
        }
        productos {
          nextToken
        }
        ContactoClientes {
          id
          nombre
          email
          cargo
          enviarFactura
          rol
          cel
          userID
        }
        ordenes {
          nextToken
        }
        indicativoPais
        indicativoCiudad
        telefono
        createdAt
        updatedAt
      }
      odc
      clienteID
      prioridad
      tipoOrden
      cooimpreso
      Plancha
      ResponsableActualID
      ResponsableActual {
        id
        cedula
        nombres
        email
        roles
        ordenesPendientes {
          nextToken
        }
        ordenesRealizadas {
          nextToken
        }
        createdAt
        updatedAt
      }
      estado
      Responsables {
        items {
          id
          usuarioID
          ordenID
          createdAt
          updatedAt
        }
        nextToken
      }
      finalizacion {
        pistas
        repeticiones
        rodillo
        paso
        gapPistas
        gapRepeticiones
        anchoBobina
        desarrollo
        truncado
        enfrentado
        cantidadTruncado
        ancho
        alto
        tipoCorte
        posicionSalida
      }
      numeroOPant
      versionOPant
      productoID
      producto {
        items {
          id
          productoID
          ordenID
          createdAt
          updatedAt
        }
        nextToken
      }
      nombreAnt
      createdAt
      updatedAt
    }
  }
`;
export const listOrdens = /* GraphQL */ `
  query ListOrdens(
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        odc
        clienteID
        prioridad
        tipoOrden
        cooimpreso
        Plancha
        ResponsableActualID
        ResponsableActual {
          id
          cedula
          nombres
          email
          roles
          createdAt
          updatedAt
        }
        estado
        Responsables {
          nextToken
        }
        finalizacion {
          pistas
          repeticiones
          rodillo
          paso
          gapPistas
          gapRepeticiones
          anchoBobina
          desarrollo
          truncado
          enfrentado
          cantidadTruncado
          ancho
          alto
          tipoCorte
          posicionSalida
        }
        numeroOPant
        versionOPant
        productoID
        producto {
          nextToken
        }
        nombreAnt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ordenesByCliente = /* GraphQL */ `
  query OrdenesByCliente(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordenesByCliente(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        odc
        clienteID
        prioridad
        tipoOrden
        cooimpreso
        Plancha
        ResponsableActualID
        ResponsableActual {
          id
          cedula
          nombres
          email
          roles
          createdAt
          updatedAt
        }
        estado
        Responsables {
          nextToken
        }
        finalizacion {
          pistas
          repeticiones
          rodillo
          paso
          gapPistas
          gapRepeticiones
          anchoBobina
          desarrollo
          truncado
          enfrentado
          cantidadTruncado
          ancho
          alto
          tipoCorte
          posicionSalida
        }
        numeroOPant
        versionOPant
        productoID
        producto {
          nextToken
        }
        nombreAnt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrdenUsers = /* GraphQL */ `
  query GetOrdenUsers($id: ID!) {
    getOrdenUsers(id: $id) {
      id
      usuarioID
      ordenID
      usuario {
        id
        cedula
        nombres
        email
        roles
        ordenesPendientes {
          nextToken
        }
        ordenesRealizadas {
          nextToken
        }
        createdAt
        updatedAt
      }
      orden {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        odc
        clienteID
        prioridad
        tipoOrden
        cooimpreso
        Plancha
        ResponsableActualID
        ResponsableActual {
          id
          cedula
          nombres
          email
          roles
          createdAt
          updatedAt
        }
        estado
        Responsables {
          nextToken
        }
        finalizacion {
          pistas
          repeticiones
          rodillo
          paso
          gapPistas
          gapRepeticiones
          anchoBobina
          desarrollo
          truncado
          enfrentado
          cantidadTruncado
          ancho
          alto
          tipoCorte
          posicionSalida
        }
        numeroOPant
        versionOPant
        productoID
        producto {
          nextToken
        }
        nombreAnt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrdenUsers = /* GraphQL */ `
  query ListOrdenUsers(
    $filter: ModelOrdenUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        usuarioID
        ordenID
        usuario {
          id
          cedula
          nombres
          email
          roles
          createdAt
          updatedAt
        }
        orden {
          id
          odc
          clienteID
          prioridad
          tipoOrden
          cooimpreso
          Plancha
          ResponsableActualID
          estado
          numeroOPant
          versionOPant
          productoID
          nombreAnt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrdenProducto = /* GraphQL */ `
  query GetOrdenProducto($id: ID!) {
    getOrdenProducto(id: $id) {
      id
      productoID
      ordenID
      producto {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        clienteID
        nombre
        marca {
          id
          nombre
          productor
          clienteID
          createdAt
          updatedAt
        }
        marcaID
        ordenes {
          nextToken
        }
        productoNuevo
        productoExistente
        productoRefID
        mainFiles {
          bucket
          region
          key
        }
        auxFiles {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        marcaProductosId
      }
      orden {
        id
        cliente {
          id
          nit_cedula
          codigo
          ciudad
          sector
          digitoVerificacion
          estado
          razonSocial
          departamento
          pais
          sucursalEncargada
          direccion
          primerNombre
          segundoNombre
          primerApellido
          segundoApellido
          tipoDocumento
          indicativoPais
          indicativoCiudad
          telefono
          createdAt
          updatedAt
        }
        odc
        clienteID
        prioridad
        tipoOrden
        cooimpreso
        Plancha
        ResponsableActualID
        ResponsableActual {
          id
          cedula
          nombres
          email
          roles
          createdAt
          updatedAt
        }
        estado
        Responsables {
          nextToken
        }
        finalizacion {
          pistas
          repeticiones
          rodillo
          paso
          gapPistas
          gapRepeticiones
          anchoBobina
          desarrollo
          truncado
          enfrentado
          cantidadTruncado
          ancho
          alto
          tipoCorte
          posicionSalida
        }
        numeroOPant
        versionOPant
        productoID
        producto {
          nextToken
        }
        nombreAnt
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrdenProductos = /* GraphQL */ `
  query ListOrdenProductos(
    $filter: ModelOrdenProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenProductos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productoID
        ordenID
        producto {
          id
          clienteID
          nombre
          marcaID
          productoNuevo
          productoExistente
          productoRefID
          createdAt
          updatedAt
          marcaProductosId
        }
        orden {
          id
          odc
          clienteID
          prioridad
          tipoOrden
          cooimpreso
          Plancha
          ResponsableActualID
          estado
          numeroOPant
          versionOPant
          productoID
          nombreAnt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
