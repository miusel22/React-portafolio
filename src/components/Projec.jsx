import React from 'react';
import '../styles/estilos.css';
import facebook from '../img/facebook.PNG';
import portafolio from '../img/portafolio.PNG';
import reto from '../img/reto.PNG';
import tecnical from '../img/tecnical.PNG';
import lol from '../img/lol.PNG';





const Project = props => (
    <>
    <section class="portafolio-item">
    <img src={facebook} alt="" class="portafolio-img"/>
    <section class="portafolio-text">
        <h2>{props.pro1}</h2>

        <a href="https://miusel22.github.io/form/" class="btn btn-dark block" target="_blank">
           {props.button} </a>
    </section>
    <br/>
</section>
<section class="portafolio-item">
                <img src={lol} alt="" class="portafolio-img"/>
                <section class="portafolio-text">
                    <h2>{props.pro2}</h2>
                    
                    <a href="https://miusel22.github.io/landing-page/" class="btn btn-dark block" target="_blank">{props.button}
                        </a>
                </section>
            </section>
            <section class="portafolio-item">
                <img src={tecnical} alt=""/>
                <section class="portafolio-text">
                    <h2>{props.pro3}</h2>
                    <p></p>
                    <a href="https://miusel22.github.io/Technical/" class="btn btn-dark block" target="_blank">{props.button}
                        </a>
                </section>
            </section>
           
       

            <section class="portafolio-item">
                <img src={portafolio} alt=""/>
                <section class="portafolio-text">
                    <h2>{props.pro4}</h2>

                    <a href="https://miusel22.github.io/tribute-page/" class="btn btn-dark block" target="_blank">{props.button}
                        </a>
                </section>
            </section>
            <section class="portafolio-item">
                <img src={reto} alt="" class="portafolio-img"/>
                <section class="portafolio-text">
                    <h2>{props.pro5}</h2>
                    <p></p>
                    <a href="https://lauracosorio.github.io/lcd/inicio.html" class="btn btn-dark block"
                        target="_blank">{props.button}</a>
                </section>
            </section>
           
</>
);

export default Project;