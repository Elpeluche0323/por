import './App.css';
import './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import CrearIngresoComponent from './components/CrearIngresoComponent';
import CrearSalidaComponent from './components/CrearSalidaComponent';
import ListaIngresoComponent from './components/ListaIngresoComponent';
import ListaSalidaComponent from './components/ListaSalidaComponent';
import ListaCajaComponent from './components/ListaCajaComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/ingreso" element={<CrearIngresoComponent />} />
          <Route path="/salida" element={<CrearSalidaComponent />} />
          <Route path="/caja/lista-caja" element={<ListaCajaComponent />} />
          <Route path="/ingreso/lista-ingreso" element={<ListaIngresoComponent />} />
          <Route path="/salida/lista-salida" element={<ListaSalidaComponent />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
