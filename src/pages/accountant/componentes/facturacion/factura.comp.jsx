import React from 'react';
import Cliente from '../cliente/cliente.comp';
import FacturacionEmpresarial from '../facturacionempresarial/facturacionempresarial.comp';
import Organizacion from '../organizacion/organizacion.comp';
import './factura.style.css';
const Factura = (props) => {
    //console.log({props.facturacionEmpresas});
    
    return(
        <div className="factura-container">
             
            {props.facturacionEmpresas.map((factura, index)=>{
                return(
                    <React.Fragment  key={factura.id}>
                        <FacturacionEmpresarial   factura={factura} />
                   
                        {factura.cliente.map((cliente,indexClient)=>{
                            return(
                                <React.Fragment key={cliente.id}>
                                    
                               <Cliente  cliente={cliente} />
                               {cliente.organizacion.map((empresa, indexEmpresa)=>{
                                   return(
                                    <React.Fragment key={empresa.id}> 
                                    <Organizacion  organizacion={empresa}/>
                                    </React.Fragment>
                                   );
                               })}
                               </React.Fragment>
                            );
                        })}
                    </React.Fragment>
                );
            
            })}
            
           
           
            
        </div>
    );
   
}
export default Factura;