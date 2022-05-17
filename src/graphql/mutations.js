/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsuario = /* GraphQL */ `
  mutation CreateUsuario(
    $input: CreateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    createUsuario(input: $input, condition: $condition) {
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
export const updateUsuario = /* GraphQL */ `
  mutation UpdateUsuario(
    $input: UpdateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    updateUsuario(input: $input, condition: $condition) {
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
export const deleteUsuario = /* GraphQL */ `
  mutation DeleteUsuario(
    $input: DeleteUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    deleteUsuario(input: $input, condition: $condition) {
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
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
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
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
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
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
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
export const createMarca = /* GraphQL */ `
  mutation CreateMarca(
    $input: CreateMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    createMarca(input: $input, condition: $condition) {
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
export const updateMarca = /* GraphQL */ `
  mutation UpdateMarca(
    $input: UpdateMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    updateMarca(input: $input, condition: $condition) {
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
export const deleteMarca = /* GraphQL */ `
  mutation DeleteMarca(
    $input: DeleteMarcaInput!
    $condition: ModelMarcaConditionInput
  ) {
    deleteMarca(input: $input, condition: $condition) {
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
export const createProducto = /* GraphQL */ `
  mutation CreateProducto(
    $input: CreateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    createProducto(input: $input, condition: $condition) {
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
export const updateProducto = /* GraphQL */ `
  mutation UpdateProducto(
    $input: UpdateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    updateProducto(input: $input, condition: $condition) {
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
export const deleteProducto = /* GraphQL */ `
  mutation DeleteProducto(
    $input: DeleteProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    deleteProducto(input: $input, condition: $condition) {
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
export const createOrden = /* GraphQL */ `
  mutation CreateOrden(
    $input: CreateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    createOrden(input: $input, condition: $condition) {
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
export const updateOrden = /* GraphQL */ `
  mutation UpdateOrden(
    $input: UpdateOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    updateOrden(input: $input, condition: $condition) {
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
export const deleteOrden = /* GraphQL */ `
  mutation DeleteOrden(
    $input: DeleteOrdenInput!
    $condition: ModelOrdenConditionInput
  ) {
    deleteOrden(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createOrdenUsers = /* GraphQL */ `
  mutation CreateOrdenUsers(
    $input: CreateOrdenUsersInput!
    $condition: ModelOrdenUsersConditionInput
  ) {
    createOrdenUsers(input: $input, condition: $condition) {
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
export const updateOrdenUsers = /* GraphQL */ `
  mutation UpdateOrdenUsers(
    $input: UpdateOrdenUsersInput!
    $condition: ModelOrdenUsersConditionInput
  ) {
    updateOrdenUsers(input: $input, condition: $condition) {
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
export const deleteOrdenUsers = /* GraphQL */ `
  mutation DeleteOrdenUsers(
    $input: DeleteOrdenUsersInput!
    $condition: ModelOrdenUsersConditionInput
  ) {
    deleteOrdenUsers(input: $input, condition: $condition) {
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
export const createOrdenProducto = /* GraphQL */ `
  mutation CreateOrdenProducto(
    $input: CreateOrdenProductoInput!
    $condition: ModelOrdenProductoConditionInput
  ) {
    createOrdenProducto(input: $input, condition: $condition) {
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
export const updateOrdenProducto = /* GraphQL */ `
  mutation UpdateOrdenProducto(
    $input: UpdateOrdenProductoInput!
    $condition: ModelOrdenProductoConditionInput
  ) {
    updateOrdenProducto(input: $input, condition: $condition) {
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
export const deleteOrdenProducto = /* GraphQL */ `
  mutation DeleteOrdenProducto(
    $input: DeleteOrdenProductoInput!
    $condition: ModelOrdenProductoConditionInput
  ) {
    deleteOrdenProducto(input: $input, condition: $condition) {
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
