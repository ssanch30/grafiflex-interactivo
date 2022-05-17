import cities from './cities.json'
import countries from './countries.json'
import states from './states.json'


export const CountryList = countries
export const StateList = states
export const CityList = cities


export const TiposDocumentos = [
    {id:'REGISTRO_CIVIL',name:'Registro Civil'},
    {id:'TARJETA_IDENTIDAD', name:'Tarjeta de Identidad'},
    {id:'CEDULA_CIUDADANIA', name:'Cedula de Ciudadania'},
    {id:'TARJETA_EXTRANJERIA', name:'Tarjeta Extranjeria'},
    {id:'CEDULA_EXTRANJERIA', name:'Cedula Extrangeria'},
    {id:'NIT', name:'NIT'},
    {id:'PASAPORTE', name:'Pasaporte'},
    {id:'DOC_ID_EXTRANJERO', name:'Pasaporte'},
    {id:'NIT_OTRO_PAIS', name:'NIT Otro Pais'},
    {id:'NUIP', name:'NUIP'}
];

export const TiposPersonas = [
    { id: 'JURIDICA' , name: 'JURIDICA' },
    { id: 'NATURAL' , name: 'NATURAL' },
];
export const Sectores = [
    {id:'FLEXIBLES',name:'FLEXIBLES'},
    {id:'ETIQUETAS',name:'ETIQUETAS'},
    {id:'CORRUGADOS',name:'CORRUGADOS'},
    {id:'SACOS',name:'SACOS'},
    {id:'SACHET',name:'SACHETS'},
    {id:'BLISTER',name:'BLISTER'},
    {id:'VASOS_CARTON',name:'VASOS_CARTON'},
    {id:'MARQUILLAS_TELAS',name:'MARQUILLAS_TELAS'},
    {id:'TAPAS',name:'TAPAS'},
    {id:'OTROS',name:'OTROS'},    
]

export const Lineatura = [
    {id: 37, name: "37"},
    {id: 49, name: "49"},
    {id: 62, name: "62"},
    {id: 74, name: "74"},
    {id: 87, name: "87"},
    {id: 99, name: "99"},
    {id: 112, name: "112"},
    {id: 124, name: "124"},
    {id: 136, name: "136"},
    {id: 149, name: "149"},
    {id: 161, name: "161"},
    {id: 198, name: "198"},
    ]
  


export const Sucursales = [
    {id:'ENVIGADO', name: 'Envigado'},
    {id:'BARRANQUILLA', name: 'Barranquilla'},
    {id:'CALI', name: 'Cali'}];
export const TiempoPago = [
    {id:'CONTADO', name: 'CONTADO'},
    {id:'30_DIAS', name: '30 DIAS'},
    {id:'45_DIAS', name: '45 DIAS'},
    {id:'60_DIAS', name: '60 DIAS'},
    {id:'90_DIAS', name: '90 DIAS'},
];

export const Calibres = [
    {id:'F45', name: '45'},
    {id:'F67', name: '67'},
    {id:'F100', name: '100'},
    {id:'F112', name: '112'},
    {id:'F155', name: '155'},
    {id:'TOYOBO95', name: 'TOYOBO 95'},
    {id:'WF80', name: 'WF 80'},
    {id:'KM73', name: 'KM 73'},
    {id:'WS94', name: 'WS 94'},
];

export const RegimenAdq = [
    {id:'RESPONSABLE_IVA', name: 'RESPONSABLE IVA'},
    {id:'NO_RESPONSABLE_IVA', name: 'NO RESPONSABLE IVA'},
];

export const TiposOrdenes =[
    {
        id:'ARTE',
        name:'Arte',
        valores: [
            {
            id:'alto', 
            name:'Alto',
            valor:'',
            },{
            id:'medio', 
            name:'Medio',
            valor:'',
            },{
            id:'bajo', 
            name:'Bajo',
            valor:'',
            },
        ],
        unidades: 'UNIDAD',
    },
    {
        id:'FINALIZACION',
        name:'Finalizacion',
        valores: [
            {
                id:'alto', 
                name:'Alto',
                valor:'',
            },
            {
                id:'bajo', 
                name:'Bajo',
                valor:'',
            }
   
            ],
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'OPENPRINT',
        name:'OpenPrint',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'COPIADO',
        name:'Copiado',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'REPETICION',
        name:'Repeticion',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'PRUEBA_CONTRATO',
        name:'Prueba de Contrato',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'MONTAJE',
        name:'Montaje',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'MAQUILA',
        name:'Maquila',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'POSITIVO_NEGATIVO',
        name:'Positivo/Negativo',
        valores: '',
        unidades: 'CENTIMETRO_CUADRADO',
    },
    {
        id:'OTRO',
        name:'Otros',
        valores: '',
        unidades: 'UNIDAD',
    }

]