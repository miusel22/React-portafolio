
import React from 'react';
import '../styles/estilos.css';




const Educacion = props => (
<>
<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-3 ml-5">
                <div class="resume-content">
                    <h3 class="mb-0 ">{props.edu1}</h3>
                    <div class="subheading">Bachillerato prom 2015</div>

                </div>

            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between ml-5">
                <div class="resume-content">
                    <h3 class="mb-0 mt-3">Academia Geek</h3>
                    <div>Programación web front-end</div>
                </div>

            </div>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between ml-5">
                <div class="resume-content">
                    <h3 class="mb-0 mt-3">Instituto Tecnológico Metropolitano</h3>
                    <div>Sistemas de información (en curso)</div>
                </div>

            </div>

</>


)
export default Educacion;

