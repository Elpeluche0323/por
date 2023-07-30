import React, { Component } from "react";
import NavbarComponent4 from "./NavbarComponent4";
import styled from "styled-components";
import FooterComponent from "./FooterComponent";
import CajaService from "../services/CajaService";

class ListaCajaComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount(){
        CajaService.getCaja().then((res) => {
            this.setState({ data: res.data});
        });
    }

    render(){
        return(
            
            <div className="home">
                <NavbarComponent4 />
                <Styles>
                <h1 className="text-center"> <b>Gestión de salida de dinero</b></h1>
                    <div className="f">

                        <table border="1" class="content-table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Fecha</th>
                                    <th>Tipo Doc</th>
                                    <th>Num Doc</th>
                                    <th>Motivo</th>
                                    <th>Ingreso</th>
                                    <th>Salida</th>
                                    <th>Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.fecha}</td>
                                        <td>{data.tipo}</td>
                                        <td>{data.numero}</td>
                                        <td>{data.motivo}</td>
                                        <td>{data.ingreso}</td>
                                        <td>{data.salida}</td>
                                        <td>{data.saldo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </Styles>
                <FooterComponent></FooterComponent>
            </div>
            
        );
    }
}

export default ListaCajaComponent;

const Styles = styled.div`


.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
}

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
}

.f{
    justify-content: center;
    align-items: center;
    display: flex;
}
*{
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.content-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.content-table thead tr{
    background-color: #006992;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
}
.content-table th,
.content-table td{
    padding: 12px 15px;
}
.content-table tbody tr{
    border-bottom: 1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even){
    background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type{
    border-bottom: 2px solid #009879;
}
.content-table tbody tr.active-row{
    font-weight: bold;
    color: #009879;
}
`