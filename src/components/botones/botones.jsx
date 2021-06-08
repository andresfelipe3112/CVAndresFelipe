
import "./botones.css";
import React from "react";
import { Link } from "react-scroll"




export default function Botones() {

    return (
        <div >
            <Link to="My Name" smooth={true}>
                <button className="btn-grad" name="Proyects" >
                    <h2 className="h2">My Name</h2>
                </button>
            </Link>

            <Link to="intro" smooth={true}>
                <button className="btn-grad" name="Contact" >
                    <h2 className="h2">experience studies</h2>
                </button>
            </Link>

            <Link to="skilleset" smooth={true}>
                <button className="btn-grad" name="Skillset" >
                    <h2 className="h2">Skillset</h2>
                </button>
            </Link>




            <Link to="CertificadosCaja" smooth={true}>
                <button className="btn-grad" name="Hobbies" >
                    <h2 className="h2">Certifications</h2>
                </button>

            </Link>

            <Link to="ContaninesBotonesProyectos" smooth={true}>
                <button className="btn-grad" name="Proyects" >
                    <h2 className="h2">projects</h2>
                </button>
            </Link>


            <Link to="contact" smooth={true}>
                <button className="btn-grad" name="Proyects" >
                    <h2 className="h2">Contact</h2>
                </button>
            </Link>




        </div>
    )

}
