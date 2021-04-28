import React from 'react';
import './cliente.style.css';
const Cliente = (props) => {
    //console.log({props.facturacionEmpresas});
    return(
        <div className="cliente-container">
            <table>
                <tr>
                    <td>nombre</td>
                    <td>direccion</td>
                    <td>municipio</td>
                    <td>departamento</td>
                    <td>telefono</td>
                    <td>correo</td>
                </tr>
                <tr>
                    <td> {props.cliente.name}</td>
                    <td className="inf-cliente">{props.cliente.address}</td>
                    <td className="inf-cliente">{props.cliente.municipio}</td>
                    <td className="departamento">{props.cliente.Departamento}</td>
                    <td className="inf-cliente">{props.cliente.telefono}</td>
                    <td className="inf-cliente">{props.cliente.correo}</td>
                </tr>
            </table>
             
             
            
        </div>
    );
}
export default Cliente;