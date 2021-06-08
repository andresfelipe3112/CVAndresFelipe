
import React from "react";
import responsiveDesing from "./responsiveDesing.png"
import "./certificado.css";
import JavaScript from "./JavaScript.png";
import ECMAScript6 from "./ECMAScript 6+.png";
import fundamentos from "./Fundamentos de JavaScript.png"
import fullStack from "./fullStackFrondEnd.png"
import jsAvanzado from "./javaScript Avanzado.png"
import expresionesRegulares from "./expresiones regulares.png"
import { Link } from "react-scroll"

let imgUrls = [
    {

        nombre: "Responsive Web Design",
        institution: "FreeCodeCamp",
        img: responsiveDesing,
        certificado: "https://www.freecodecamp.org/certification/andreshero/responsive-web-design"
    },
    {
        nombre: "JavaScript Algorithms ",
        nombre2: "and Data Structures",
        institution: "FreeCodeCamp",
        img: JavaScript,
        certificado: "https://www.freecodecamp.org/certification/andreshero/javascript-algorithms-and-data-structures"
    },
    {
        nombre: "ECMAScript6+",
        institution: "Platzi",
        img: ECMAScript6,
        certificado: "https://platzi.com/p/AndresHERO/curso/1815-ecmascript-6/diploma/detalle/"
    },
    {
        nombre: "Fundamentos de JS",
        institution: "Platzi",
        img: fundamentos,
        certificado: "https://platzi.com/p/AndresHERO/curso/1339-fundamentos-javascript/diploma/detalle/"
    },
    {
        nombre: "Full Stack Frond-End",
        institution: "linkedin.com/Learning",
        img: fullStack,
        certificado: "http://www.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end"
    },
    {
        nombre: "JS Expresiones Regulares",
        institution: "linkedin.com/Learning",
        img: expresionesRegulares,
        certificado: "http://imgfz.com/i/4s2QPfj.png"
    },
    {
        nombre: "JS Buenas Practicas",
        institution: "linkedin.com/Learning",
        img: jsAvanzado,
        certificado: "http://imgfz.com/i/sSLQriq.png"
    },



]

export default function Certificados() {

    // eslint-disable-next-line no-lone-blocks



    const [animationStyle1, setanimactionStyle1] = React.useState("");
    const [animationStyleOFF1, setanimactionStyleOFF1] = React.useState("imgOFF1");
    const inputRef1 = React.useRef(); //es lo mismo que documento.getElemntId


    const scrollHandler = () => {

        let topPosi = inputRef1.current.getBoundingClientRect().top;
        //console.log(topPosi + "postop");
        //console.log(inputRef1.current.getBoundingClientRect().top);//hace referencia al documento actual

        if (topPosi < 500 && topPosi > -653) {                                          //si es mayor el estado el animationStyle="0"
            // console.log(topPosi)
            //console.log("mayor a cero");
            // console.log(topPosi)
            // console.log("menor cero")

            setanimactionStyle1("animationON1")
            setanimactionStyleOFF1("imgON1")


        } else {
            // console.log(topPosi)
            // console.log("menor cero")

            // setanimactionStyle1("")
            //setanimactionStyleOFF1("imgOFF1")
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
    }


    React.useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);

    });

    /*window.addEventListener("scroll", function () {
        let hlmtLogo = document.getElementById("htmlLogo");
        let posiciónLogo = hlmtLogo.getBoundingClientRect().top();
        console.log(posiciónLogo.getBoundingClientRect().top());
    })*/


    return (

        <div ref={inputRef1} className="container1" id="CertificadosCaja" >
            {
                imgUrls.map((imagen, index) => {


                    return (

                        <div key={index} className={animationStyleOFF1 + " " + animationStyle1} id="certificados" >
                            <img className={"imgA"} src={imagen.img} alt=""></img>
                            <a href={imagen.certificado} target="blank" onClick={() => handleClick} className={"h2nombre"}>{`${imagen.nombre}`}</a>
                            <h3 className={"h3institution"}>{imagen.institution}</h3>
                        </div>


                    )
                })
            }

        </div>
    )
}



