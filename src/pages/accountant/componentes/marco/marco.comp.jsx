import React from 'react';
import Factura from '../facturacion/factura.comp';
import Formulario from '../formulario/formulario.comp';

import './marco.style.css'
const Marco = (props) => {
    return(
        <div className="marco-container">
         
         <div className="centrar">
             <Formulario />
             <Factura facturacionEmpresas={props.facturacionEmpresas} />
         </div>
        </div>
        
    );
}
export default Marco;