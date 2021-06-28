
import Habilidades from "./components/habilidades/habilidades"
import './App.css';
import Introdu from './components/introduccion/introduccion';
import Botones from './components/botones/botones';
import React from 'react';
import Certificados from './components/certificados/certificados.jsx';
import Contacto from "./components/contacto/contacto";
import Iam from './components/iam/iam';
import yo from "../src/perfil.png";
import { Route } from 'react-router-dom';
import ApiDellClima from "./components/ApiDelClima/ApiClima.jsx";






function App() {

  // const [mostrarboton, setMostrarboton] = React.useState({
  //   className: "",
  //   app: ""

  // })

  // const whenNotMobileDevice = () => {
  //   if (document.documentElement.clientWidth < 870) {
  //     console.log(document.documentElement.clientWidth);
  //     setMostrarboton({ className: "App-Sinfondo" })
  //   } else {
  //     setMostrarboton({ className: "App-fondo" })
  //   }
  // }
  // setTimeout(() => {
  //   whenNotMobileDevice();
  // }, 0)
  // React.useEffect(() => {

  //   window.addEventListener("resize", whenNotMobileDevice, true);
  // }, []);


  return (


    <div className="App">

      <div className="hability">
        <Iam />
        <Introdu />
        <Habilidades />
        <Certificados />
        <ApiDellClima />
        <Contacto />
      </div>


      <div className="App-fondo">
        <div className="fondoPerfil">
          <img id="imagenyo" src={yo} alt="" ></img>
          <p align="center" id="presentation">Lo que mas me gusta de la programación es dar soluciones a problemas aparentemente complicados</p>

          <p align="center" id="presentation">Soy una persona comprometida con el trabajo, creativa y entusiasta ante los nuevos retos, por ello me gustaría ser considerado para participar en el proceso de selección y pertenecer a su equipo de trabajo.</p>

        </div>
        <div className="botones">
          <Botones />
        </div>
      </div>
    </div>

  );




}

export default App;

