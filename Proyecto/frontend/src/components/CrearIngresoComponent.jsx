import React, { useState  } from "react";
import NavbarComponent5 from "./NavbarComponent5";
import FooterComponent from "./FooterComponent";
import styled from "styled-components";
import IngresoService from  '../services/IngresoService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export default function CrearIngresoComponent(props){

    const initialState = {
        fecha: null,
        tipo: "Recibo",
        numero: "",
        motivo: "Ingreso a Caja",
        ingreso: ""
    };

    const [input, setInput] = useState(initialState);
    
    const changeFechaHandler = (fecha) => {
        setInput({ ...input, fecha: fecha });
        console.log(input.fecha); 
    };

    const changeNumeroHandler = event => {
        setInput({ ...input, numero: event.target.value });
        console.log(input.numero);
    };
    const changeIngresoHandler = event => {
        setInput({ ...input, ingreso: event.target.value });
        console.log(input.ingreso);
    };

    
    const crearIngreso = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea realizar el deposito?",
            text: "Asegurese de que los parametros esten correctos",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Deposito ingresado correctamente", {icon: "success", timer: "3000"});
                let ingreso = {fecha: input.fecha, tipo: input.tipo, numero: input.numero,motivo: input.motivo, ingreso: input.ingreso};
                console.log(input.fecha)
                console.log(input.tipo)
                console.log(input.numero)
                console.log(input.motivo)
                console.log(input.ingreso)
                console.log("ingreso => " + JSON.stringify(ingreso));
                IngresoService.createIngreso(ingreso).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Deposito no agregado.", icon: "error"});
            }
        });
    };

    return(
            
            <Styles>
            <div className="home">
                <NavbarComponent5 />
                    <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>Agregar Deposito</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <Form>
                                    <Form.Label>Fecha de deposito</Form.Label>
                                        <Form.Group  className="mb-3">
                                            <DatePicker
                                                selected={input.fecha}
                                                onChange= {changeFechaHandler}
                                                dateFormat="yyyy/MM/dd"
                                                className="form-control"
                                                showYearDropdown
                                            />
                                            
                                        </Form.Group >
                                        <Form.Group className="mb-3" controlId="numero" value = {input.numero} onChange={changeNumeroHandler}>
                                            <Form.Label>Numero del Documento</Form.Label>
                                            <Form.Control type="numero" placeholder="Numero de documento XXXXX" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="ingreso" value = {input.ingreso} onChange={changeIngresoHandler}>
                                            <Form.Label>Deposito</Form.Label>
                                            <Form.Control type="ingreso" placeholder="Cantidad de dinero a depositar" />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <Button className="boton" onClick={crearIngreso}>Ingresar deposito</Button>
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

input[type=numero],input[type=ingreso] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.form-control{
    width: 310%;
    padding: 14px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;

}

.boton {
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