import React from 'react';
import './cliente.style.css';
const Cliente = (props) => {
    //console.log({props.facturacionEmpresas});
    return(
        <div className="cliente-container">
             {props.infactura.fecha} {props.infactura.fecha_vencimiento}
            {props.infactura.Rut} {props.infactura.N_Pedido} {props.infactura.Forma_pago} 
            {props.infactura.Total}
           
            
        </div>
    );
}
export default Cliente;