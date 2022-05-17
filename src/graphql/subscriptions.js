/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsuario = /* GraphQL */ `
  subscription OnCreateUsuario {
    onCreateUsuario {
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
export const onUpdateUsuario = /* GraphQL */ `
  subscription OnUpdateUsuario {
    onUpdateUsuario {
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
export const onDeleteUsuario = /* GraphQL */ `
  subscription OnDeleteUsuario {
    onDeleteUsuario {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente {
    onCreateCliente {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente {
    onUpdateCliente {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente {
    onDeleteCliente {
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
export const onCreateMarca = /* GraphQL */ `
  subscription OnCreateMarca {
    onCreateMarca {
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
export const onUpdateMarca = /* GraphQL */ `
  subscription OnUpdateMarca {
    onUpdateMarca {
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
export const onDeleteMarca = /* GraphQL */ `
  subscription OnDeleteMarca {
    onDeleteMarca {
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
export const onCreateProducto = /* GraphQL */ `
  subscription OnCreateProducto {
    onCreateProducto {
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
export const onUpdateProducto = /* GraphQL */ `
  subscription OnUpdateProducto {
    onUpdateProducto {
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
export const onDeleteProducto = /* GraphQL */ `
  subscription OnDeleteProducto {
    onDeleteProducto {
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
export const onCreateOrden = /* GraphQL */ `
  subscription OnCreateOrden {
    onCreateOrden {
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
export const onUpdateOrden = /* GraphQL */ `
  subscription OnUpdateOrden {
    onUpdateOrden {
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
export const onDeleteOrden = /* GraphQL */ `
  subscription OnDeleteOrden {
    onDeleteOrden {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrdenUsers = /* GraphQL */ `
  subscription OnCreateOrdenUsers {
    onCreateOrdenUsers {
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
export const onUpdateOrdenUsers = /* GraphQL */ `
  subscription OnUpdateOrdenUsers {
    onUpdateOrdenUsers {
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
export const onDeleteOrdenUsers = /* GraphQL */ `
  subscription OnDeleteOrdenUsers {
    onDeleteOrdenUsers {
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
export const onCreateOrdenProducto = /* GraphQL */ `
  subscription OnCreateOrdenProducto {
    onCreateOrdenProducto {
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
export const onUpdateOrdenProducto = /* GraphQL */ `
  subscription OnUpdateOrdenProducto {
    onUpdateOrdenProducto {
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
export const onDeleteOrdenProducto = /* GraphQL */ `
  subscription OnDeleteOrdenProducto {
    onDeleteOrdenProducto {
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
