import React from 'react';
import './organizacion.style.css';
const Organizacion = (props) => {
    //console.log({props.facturacionEmpresas});
    return(
        <div className="organizacion-container">
            {props.organizacion.name} {props.organizacion.codigo}
           
            
        </div>
    );
}
export default Organizacion;