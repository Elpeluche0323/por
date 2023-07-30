import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";


export default function Home(){
    
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <GlobalStyle />
            <HomeStyle>
                <h1 className="text-center"> <b>Menú de gestión</b></h1>
                <div class="box-area">
                    <div class="single-box">
                        <a href="/ingreso">
                            <div class="img-area">
                            </div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Gestión entrada de dinero </strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/salida">
                            <div class="img-area">
                            </div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Gestión salida de dinero</strong></span>
                        </div>
                    </div>
                    <div class="single-box">
                        <a href="/caja/lista-caja">
                            <div class="img-area"></div>
                        </a>
                        <div class="img-text">
                            <span class="header-text"><strong>Resumen de movimientos</strong></span>
                            <p></p>
                        </div>
                    </div>
                </div>
            </HomeStyle>
            <FooterComponent></FooterComponent>
        </div>
    );
}



const GlobalStyle = createGlobalStyle`
    body { 
        background-color: #515EA1;
`
const HomeStyle = styled.nav`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    color: #fff;
}

.box-area{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.single-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: auto;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    margin: 20px;
    padding: 20px;
    transition: .3s
}

.img-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 6px solid #ddd;
    border-radius: 50%;
    padding: 20px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
}

.single-box:nth-child(1) .img-area{
    background-image: url(http://www.economiavirtual.com.py/web/img/noticias/31035.jpg)
}

.header-text{
    font-size: 23px;
    font-weight: 500;
    line-height: 48px;
}
.img-text p{
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
}
.single-box:hover{
    background: #e84393;
    color: #fff;}

.single-box:nth-child(2) .img-area{
        background-image: url(https://previews.123rf.com/images/jovanas/jovanas1612/jovanas161200989/68516631-pago-y-dinero-dise%C3%B1o.jpg)
}
.single-box:nth-child(3) .img-area{
        background-image: url(https://img.freepik.com/vector-gratis/ingresos-netos-calculando-ilustracion-concepto-abstracto-calculo-sueldos-formula-ingresos-netos-salario-neto-contabilidad-corporativa-calculo-ganancias-estimacion-ganancias_335657-1238.jpg?w=2000)
}

.login-box{
    cursor: pointer;
}
`