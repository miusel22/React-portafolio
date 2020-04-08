import React from 'react';
import '../styles/estilos.css';
import Falabella from '../img/falamaluca.png';
import zenu from '../img/zenu.gif';


const Experiencia = props => (
<>
<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-3 ml-5">
    <section class="portafolio-item">
    <img src={Falabella} alt="" class="portafolio-img"/>
    <section class="portafolio-text" >

        <h2>{props.cargo1}</h2>
        <p>{props.empresa1}</p>
        <p>{props.time1}</p>

    </section>
</section>
<section class="portafolio-item">
    <img src={zenu} alt="" class="portafolio-img"/>
    <section class="portafolio-text" >

        <h2>{props.cargo3}</h2>
        <p>{props.empresa3}</p>
        <p>{props.time3}</p>

    </section>
</section>
</div>

</>


)
export default Experiencia;
