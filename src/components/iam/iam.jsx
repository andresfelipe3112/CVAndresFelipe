import "./Im.css"
import React from "react";



export default function Iam() {



    const [nombrejsestado, setnombrejsestado] = React.useState("");
    //const [nombrejsestadoB, setnombrejsestadoB] = React.useState("");





    const nombreEnMoviniento = () => {
        let nombreJs = "JavaScript Developer Full-Stack";

        let n = 0;
        let nuevoTexto = "";

        let id = setInterval(() => {
            nuevoTexto = nuevoTexto + nombreJs[n]
            n++;
            if (nuevoTexto.length === nombreJs.length) {

                clearInterval(id)
            }
            // console.log(nuevoTexto)
            setnombrejsestado(nuevoTexto)

        }, 130)


    }

    // const nombreEnMoviniento1 = () => {
    //     let nombreJs1 = "Esta pagina fue creada con React.js JavasScript Redux Css Sass ";


    //     let na = 0;
    //     let nuevoTexto1 = "";

    //     setTimeout(() => {
    //         let id1 = setInterval(() => {
    //             nuevoTexto1 = nuevoTexto1 + nombreJs1[na]
    //             na++;
    //             if (nuevoTexto1.length === nombreJs1.length) {

    //                 clearInterval(id1)
    //             }
    //             //console.log(nuevoTexto1)
    //             setnombrejsestadoB(nuevoTexto1)

    //         }, 150)


    //     }, 3000)




    // }




    React.useEffect(() => {

        setTimeout(() => {
            nombreEnMoviniento();
        }, 2000)

        //nombreEnMoviniento1();


    }, [])



    return (
        <div className="ImContainer" id="My Name">
            <div>
                <h1 align="center" id="NombreInicio"> Andres Felipe Pinilla Meneses</h1>
            </div>
            <div>
                <h1 align="center" id="js">{nombrejsestado}</h1>
            </div>

            <div>
                <h1 align="center" id="creacion">"This page was created with React.js JavasScript Redux Css Sass"</h1>
            </div>
        </div>
    )
}