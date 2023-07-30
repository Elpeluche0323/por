import React, { useState  } from "react";
import NavbarComponent6 from "./NavbarComponent6";
import FooterComponent from "./FooterComponent";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import SalidaService from "../services/SalidaService";

export default function CrearSalidaComponent(props){

    const initialState = {
        fecha: "",
        tipo: "",
        numero: "",
        motivo: "",
        salida: ""
    };

    const [input, setInput] = useState(initialState);
    
    const changeFechaHandler = event => {
        setInput({ ...input, fecha: event.target.value });
        console.log(input.fecha);
    };
    const changeTipoHandler = event => {
        setInput({ ...input, tipo: event.target.value });
        console.log(input.tipo);
    };
    const changeNumeroHandler = event => {
        setInput({ ...input, numero: event.target.value });
        console.log(input.numero);
    };
    const changeMotivoHandler = event => {
        setInput({ ...input, motivo: event.target.value });
        console.log(input.motivo);
    };
    const changeSalidaHandler = event => {
        setInput({ ...input, salida: event.target.value });
        console.log(input.salida);
    };

    
    const crearSalida = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea retirar dinero?",
            text: "Asegurese de que los parametros esten correctos",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Retiro realizado correctamente", {icon: "success", timer: "3000"});
                let salida = {fecha: input.fecha, tipo: input.tipo, numero: input.numero,motivo: input.motivo, salida: input.salida};
                console.log(input.fecha)
                console.log(input.tipo)
                console.log(input.numero)
                console.log(input.motivo)
                console.log(input.salida)
                console.log("salida => " + JSON.stringify(salida));
                SalidaService.createSalida(salida).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Retiro no retirado.", icon: "error"});
            }
        });
    };

    return(
            
            <Styles>
            <div className="home">
                <NavbarComponent6 />
                    <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>Retirar Dinero</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="fecha" value = {input.fecha} onChange={changeFechaHandler}>
                                            <Form.Label>Fecha del retiro</Form.Label>
                                            <Form.Control type="fecha" placeholder="Fecha de retiro del dinero" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="tipo" value = {input.tipo} onChange={changeTipoHandler}>
                                            <Form.Label>Tipo de documento</Form.Label>
                                            <Form.Select aria-label="documento" size="lg">
                                            <option>Seleccione el tipo de documento</option>
                                            <option value="Boleta">Boleta</option>
                                            <option value="Factura">Factura</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="numero" value = {input.numero} onChange={changeNumeroHandler}>
                                            <Form.Label>Numero del Documento</Form.Label>
                                            <Form.Control type="numero" placeholder="Numero de documento XXXXX" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="motivo" value = {input.motivo} onChange={changeMotivoHandler}>
                                            <Form.Label>Motivo del retiro</Form.Label>
                                            <Form.Control type="motivo" placeholder="Motivo del retido de dinero" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="salida" value = {input.salida} onChange={changeSalidaHandler}>
                                            <Form.Label>Deposito</Form.Label>
                                            <Form.Control type="salida" placeholder="Cantidad de dinero a retirar" />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <Button className="boton" onClick={crearSalida}>Retirar dinero</Button>
                            </div>
                        </div>
                    </div>
                
            </div>
            <FooterComponent></FooterComponent>
            </Styles>
        
            
        )
    }


const Styles = styled.div`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
}

.home{
    background-color: #006992;
    margin: 0;
    padding: 0;
}

.mainclass{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    border: 9px solid #CED0CE;
    background-color: #DADDD8;
    width: 50%;
    padding: 36px;
}

input[type=fecha],input[type=tipo],input[type=numero],input[type=motivo],input[type=salida] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

Button {
    background-color: #42bfbb;
    color: white;
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
}

Button:hover {
    opacity: 0.8;
}

.formcontainer {
    text-align: left;
    margin: 24px 100px 9px;
}

.container {
    padding: 24px 0;
    text-align:left;
}

span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
}
`