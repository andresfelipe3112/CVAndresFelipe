import gmail from "./gmail.png";
import instagram from "./instagram.png";
import whatsapp from "./whatsapp.png";
import linkeind from "./link.png";
import "./contacto.css"
import React from 'react';
import gitHub from "./github.png"


export default function Contacto() {




    return (

        <div className="containerContacto" id="contact" >

            <img className="imagenesContacto" src={gmail} alt=""></img>
            <a target="blank" href="andresfelipe3112@gmail.com" className="tipografiaContacto" >Andresfelipe3112@gmail.com</a>
            <img className="imagenesContacto" src={whatsapp} alt=""></img>
            <h2 className="tipografiaContacto">+57 314 209 9202</h2>
            <img className="imagenesContacto" src={linkeind} alt=""></img>
            <a target="blank" href="https://www.linkedin.com/in/andresfelipepinillameneses/" className="tipografiaContacto">
                Andrés Felipe Pinilla Meneses</a>
            <img id="github" src={gitHub} alt=""></img>
            <a target="blank" href="https://github.com/andresfelipe3112" className="tipografiaContacto">andresfelipepinillameneses</a>

            {/*<img className="imagenesContacto" src={instagram} alt=""></img>
            <h2 className="tipografiaContacto">andresfelipeqq</h2> */}
            <div className="containerContactoUltimo"></div>
        </div>


    )
}