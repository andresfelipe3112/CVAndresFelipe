
import html from './imagenesLogos/html.png';
import css from './imagenesLogos/css.png';
import cs6 from './imagenesLogos/cs6.png';
import git from './imagenesLogos/git.png';
import jQuery from './imagenesLogos/jQuery.png';
import react from './imagenesLogos/react.png';
import jsNodeExpress from './imagenesLogos/jsNodeExpress.png';
import ps from './imagenesLogos/ps.png';
import ts from './imagenesLogos/ts.png';
import vimeo from './imagenesLogos/vimeo.png';
import ai from './imagenesLogos/ai.png';
import "./habilidades.css";
import React from 'react';




export default function Habilidades() {


    //const [animationSolocajaCertificados, setAnimationSolocajaCertificados] = React.useState("animationSolocajaCertificados")
    const [animationStyle, setanimactionStyle] = React.useState("");
    const [animationStyleOFF, setanimactionStyleOFF] = React.useState("imgOFF");

    const inputRef = React.useRef(); //es lo mismo que documento.getElemntId
    const scrollHandler = () => {
        let topPosi = inputRef.current.getBoundingClientRect().top;
        //console.log(inputRef.current.getBoundingClientRect().top);//hace referencia al documento actual
        if (topPosi < 500 && topPosi > -653) {
            //console.log(topPosi)
            // console.log("menor cero")
            setanimactionStyle("animationON")
            setanimactionStyleOFF("imgON")
            //setAnimationSolocajaCertificados("animationSolocajaCertificados")                                     //si es mayor el estado el animationStyle="0"
            ///console.log("afirmativo");


        } else {
            //  console.log(topPosi)
            //console.log("mayor a cero");



            //setanimactionStyle("")
            //setanimactionStyleOFF("imgOFF")
            //console.log("negativo cambiar");
        }
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

        <div>
            <div id="skilleset" className="container">

                <div ref={inputRef} className={animationStyleOFF + " " + animationStyle} id="htmlLogo"><img className="img1" src={html} alt="" ></img>
                    <h3 id="h3Habilidades"> Html5 </h3>
                </div>

                <div className={animationStyleOFF + " " + animationStyle} id="cssLogo"><img className="img1" src={css} alt="" ></img>
                    <h3 id="h3Habilidades"> Css3 </h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="ECMALogo"><img className="img1" src={cs6} alt="" ></img>
                    <h3 id="h3Habilidades">{`ECMA
                    Script 6`}</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="git"><img className="img1" src={git} alt="" ></img>
                    <h3 id="h3Habilidades">Git/GitHub</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="jQ"><img className="img1" src={jQuery} alt="" ></img>
                    <h3 id="h3Habilidades">jQuery</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="React"><img className="img1" src={react} alt="" ></img>
                    <h3 id="h3Habilidades">React.js</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="Node"><img className="img1" src={jsNodeExpress} alt="" ></img>
                    <h3 id="h3Habilidades">Node.js Express</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="TypeScript"><img className="img1" src={ts} alt="" ></img>
                    <h3 id="h3Habilidades">TypeScript</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="PhotoShop"><img className="img1" src={ps} alt="" ></img>
                    <h3 id="h3Habilidades">PhotoShop</h3>
                </div>

            *<div className={animationStyleOFF + " " + animationStyle} id="Vimeo"><img className="img1" src={vimeo} alt="" ></img>
                    <h3 id="h3Habilidades">Vimeo</h3>
                </div>
                <div className={animationStyleOFF + " " + animationStyle} id="AdobeIlustrator"><img className="img1" src={ai} alt="" ></img>
                    <h3 id="h3Habilidades">Adobe Ilustrator</h3>
                </div>
                <div className={"animationSolocajaCertificados" /*+ " " + animationStyle + "Cajanegra"*/} id="skillventas">

                    <div className="cajadosunidades">
                        <div className="dosCajas">
                            <h2 align="start" className="hobbist">Hobbies</h2>
                            <ul>
                                <li>Programar</li>
                                <li>Diseñar</li>
                                <li>Tocar Piano</li>
                                <li>Jugar Futbol</li>
                                <li>Jugar Poker</li>
                            </ul>
                        </div>
                        <div className="dosCajas1">
                            <h2 align="start" className="hobbist" >Idiomas</h2>
                            <ul>
                                <li>English B1</li>
                                <li>Español Nativo</li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>




        </div >
    )
}