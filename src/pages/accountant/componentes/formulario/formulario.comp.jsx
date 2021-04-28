import React,{ useState }  from 'react';
//import Factura from '../facturacion/factura.comp';
import './formulario.style.css';
const Formulario = () => {
    const [factura,SetFactura]= useState('F1');
    const [fecha,SetFecha]= useState('');
    const [fechavencimiento,SetFechaVencimiento]= useState('');
    const [rut,SetRut]= useState(0);
    const [npedido,SetNPedido]= useState(0);
    const [formapago,SetFormaPago]= useState('');
    const [total,SetTotal]= useState(0);
    const [cliente,SetCliente]= useState('');
    const [direccion,SetDireccion]= useState('');
    const [municipio,SetMunicipio]= useState('');
    const [departamento,SetDepartamento]= useState('');
    const [telefono,SetTelefono]= useState('');
    const [correo,SetCorreo]= useState('');
    const [organizacion,SetOrganizacion]= useState('COl1');

    const enviar = (event) =>{
        event.preventDefault();
        console.log('factura ' + factura);
        console.log('fecha ' + fecha);
        console.log('fecha vencimiento ' + fechavencimiento);
        console.log('Rut ' + rut);
        console.log('N Pedido ' + npedido);
        console.log('Forma pago ' + formapago);
        console.log('Total' + total);
        console.log('cliente ' + cliente);
        console.log('Direccion ' + direccion);
        console.log('Municipio ' + municipio);
        console.log('Departamento ' + departamento);
        console.log('Telefono ' + telefono);
        console.log('Correo ' + correo);
        console.log('organizacion ' + organizacion);
        
    }

    


    return(
        <div className="formulario-container">
         <form>
            <table>
                <tbody>
                    <tr>
                        <td>Facturacion</td> 
                        <td>Fecha</td>
                    </tr>
                    <tr>
                        <td>
                        
                            <select 
                            value={factura}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                SetFactura(event.target.value);
                            }}
                            >
                            <option value="F1">Factura Electronica</option>
                            </select>
                        </td>
                        <td>
                        <input 
                        type="date"
                        value={fecha}
                        onChange={(event)=>{
                            SetFecha(event.target.value);
                        }}
                        
                        />
                        </td>
                        
                    </tr>
                    <tr>
                        <td>Fecha vencimiento</td>
                        <td>RUT</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                        type="date"
                        value={fechavencimiento}
                        onChange={(event)=>{
                            SetFechaVencimiento(event.target.value);
                        }}
                        
                        />
                        </td>
                        <td><input 
                        type="number"
                        value={rut}
                        onChange={(event)=>{
                            SetRut(event.target.value);
                        }}
                        
                        /></td>
                    </tr>
                    <tr>
                        <td>N Pedido</td>
                        <td>forma de pago</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                        type="number"
                        value={npedido}
                        onChange={(event)=>{
                            SetNPedido(event.target.value);
                        }}
                        
                        />
                        </td>
                        <td>
                        <input 
                        type="text"
                        value={formapago}
                        onChange={(event)=>{
                            SetFormaPago(event.target.value);
                        }}
                        
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Cliente</td>
                        
                    </tr>
                    <tr>
                        <td><input 
                        type="number"
                        value={total}
                        onChange={(event)=>{
                            SetTotal(event.target.value);
                        }}
                        
                        /></td>
                        <td><input 
                        type="text"
                        value={cliente}
                        onChange={(event)=>{
                            SetCliente(event.target.value);
                        }}
                        
                        /></td>
                    </tr>
                    <tr>
                        <td>direccion</td>
                        <td>municipio</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                        type="text"
                        value={direccion}
                        onChange={(event)=>{
                            SetDireccion(event.target.value);
                        }}
                        
                        /> 
                        </td>
                        <td>
                        <input 
                        type="text"
                        value={municipio}
                        onChange={(event)=>{
                            SetMunicipio(event.target.value);
                        }}
                        
                        /> 
                        </td>
                    </tr>
                    <tr>
                        <td>departamento</td>
                        <td>telefono</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                        type="text"
                        value={departamento}
                        onChange={(event)=>{
                            SetDepartamento(event.target.value);
                        }}
                        
                        /> 
                        </td>
                        <td>
                        <input 
                        type="number"
                        value={telefono}
                        onChange={(event)=>{
                            SetTelefono(event.target.value);
                        }}
                        
                        /> 
                        </td>
                    </tr>
                    <tr>
                        <td>Correo</td>
                        <td>Organizacion</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                        type="email"
                        value={correo}
                        onChange={(event)=>{
                            SetCorreo(event.target.value);
                        }}
                        
                        /> 
                        </td>
                        <td>
                            <select
                            value={organizacion}
                            onChange={(event)=>{
                                console.log(event.target.value);
                                SetOrganizacion(event.target.value);
                            }}
                            >
                            <option value="COl1">Empresa</option>
                            <option value="R2">Restaurante</option>
                            <option value="H1">Hotel</option>
                            <option value="C1">Centro Comercial</option>
                            </select>
                        </td>
                    
                    </tr>
                    <tr>
                        <td> <button
                            onClick={enviar}
                        >Guardar Factura</button></td>
                    </tr> 
                </tbody>
                
                
            </table>
          </form>       
              
                  
             
                 
                 
            
        </div>
    );
}
export default Formulario;