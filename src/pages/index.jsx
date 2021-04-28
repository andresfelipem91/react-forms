import React from 'react';


import Marco from './accountant/componentes/marco/marco.comp';

const Facturacion = () => {
    let facturacionEmpresas=[
                {

                    id:"F1",
                    fecha:"12/04/2021",
                    fecha_vencimiento:"12/04/21",
                    name:'Factura electronica',
                    Rut:"001",
                    N_Pedido:"01",
                    Forma_pago:"credito",
                    Total:"1.200.000",
                    cliente:[
                        {
                            id:'C3',
                            name:'Colombi',
                            address:"cr 23 a 12-13 #45",
                            municipio: "Manizales",
                            Departamento:"caldas",
                            telefono:"58886",
                            correo:"adsdsf@hotmail.com",
                            organizacion:[
                                {
                                    id:"COl1",
                                   name:"empresa",
                                   
                                   
                                   
                                }
                               
                            ]
                                
                            },

                        
                        {
                            id:"TER1",
                            name:'Termales',
                            address:"cr 23 a 14-13 #46",
                            municipio: "Manizales",
                            Departamento:"caldas",
                            telefono:"12483",
                            correo:"rtyi@gmail.com",
                            organizacion:[
                            {
                                id:"H1",
                                name:"Hotel",
                             },   
                            ]
                           

                        },
                        {
                            id:"CP1",
                            name:'Cable plaza', 
                            address:"cr 30 a 22-53 #65",
                            municipio: "Manizales",
                            Departamento:"caldas",
                            telefono:"875522",
                            correo:"cc@cableplaza.org",
                            organizacion:[{
                                id:"CC1",
                                name:"Centro Comercial",
                            },]

                        },
                        {
                            id:"LC3",
                            name:'La chavita',
                            address:"cr 33 a 72-13 #65",
                            municipio: "Manizales",
                            Departamento:"caldas",
                            telefono:"89245",
                            correo:"lacha@gmail.com",
                            organizacion:[{
                                id:"R2",
                                name:"Restaurante"
                            },]

                        },
                      
                    ]

                },
            ]
    
   return(
       <div> 
           <Marco facturacionEmpresas={facturacionEmpresas} />
         
           
       </div>
   );
}
export default Facturacion;