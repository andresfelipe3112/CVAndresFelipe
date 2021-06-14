
import Habilidades from "./components/habilidades/habilidades"
import './App.css';
import Introdu from './components/introduccion/introduccion';
import Botones from './components/botones/botones';
import React from 'react';
import Certificados from './components/certificados/certificados.jsx';
import Contacto from "./components/contacto/contacto";
import Iam from './components/iam/iam';
import yo from "./yo.png";
import { Route } from 'react-router-dom';
import ApiDellClima from "./components/ApiDelClima/ApiClima.jsx"





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
        <img id="imagenyo" src={yo} alt="" ></img>
        <div className="botones">
          <Botones />
        </div>
      </div>
    </div>

  );




}

export default App;

