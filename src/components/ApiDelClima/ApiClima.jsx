import { Link } from 'react-router-dom';
import "../ApiDelClima/ApiClima.css"
import { Route } from "react-router-dom";
import "../ApiDelClima/ApiClima.css"
import Calculadora from '../ApiDelClima/caluladora/components/Calculadora';
import AppDos from "./componenteClima/containers/AppDos"



export default function ApiDellClima() {

    return (

        <div >
            <div className="ContaninesBotonesProyectos">

                <Link to="/ApiDelClima">
                    <button id="botonApi" >Esta es una Api del clima</button>
                </Link>

                <Link to="/ApiCalculadora">
                    <button id="botonApi">Calculadora</button>
                </Link>


                {/* <button id="botonApi">
                    <a href="https://github.com/andresfelipe3112/MonedaTipeScript.git" target="_blank" rel="noreferrer" >Proyecto con TypeScript</a> </button> */}

                <button id="botonApi"><a href="https://condescending-colden-661d84.netlify.app/" target="_blank" rel="noreferrer" >Clon Neflix Css</a></button>
                <button id="botonApi"><a href="https://zen-dubinsky-a25239.netlify.app/" target="_blank" rel="noreferrer" >Pokemon MEMORY</a></button>

                <button id="botonApi"><a href="https://affectionate-darwin-9ff6da.netlify.app/" target="_blank" rel="noreferrer" >Clon Css Spotify</a></button>
                <button id="botonApi"><a href="https://admiring-mestorf-fa82a8.netlify.app/" target="_blank" rel="noreferrer" >Quote React</a></button>

            </div>
            <div className="containerApi">
                <Route path="/ApiDelClima" component={AppDos}></Route>
                <Route path="/ApiCalculadora" component={Calculadora}></Route>


            </div>

        </div>

    )
}



