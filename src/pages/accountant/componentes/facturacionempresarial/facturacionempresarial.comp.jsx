import React from 'react';
import './facturacionempresarial.style.css';
const FacturacionEmpresarial = (props) => {
    //console.log({props.facturacionEmpresas});
    return(
        <div className="factura-empresarial-container">
            {props.factura.name} 
           <table>
               <tr>
                   <td>fecha</td>
                   <td>fecha_vencimiento</td>
                   <td>Rut</td>
                   <td> N_Pedido</td>
                   <td>Forma_pago</td>
                   <td>Total</td>
                   
               </tr>
               <tr>
                   <td className="inf-cliente"> {props.factura.fecha}</td>
                    <td className="inf-cliente">{props.factura.fecha_vencimiento}</td>
                    <td className="inf-cliente">{props.factura.Rut}</td>
                    <td className="inf-cliente">{props.factura.N_Pedido}</td>
                    <td className="inf-cliente">{props.factura.Forma_pago}</td>
                    <td className="inf-cliente">{props.factura.Total}</td>
               </tr>
           </table>
            
        </div>
    );
}
export default FacturacionEmpresarial;