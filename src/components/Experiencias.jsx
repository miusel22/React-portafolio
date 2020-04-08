import React from 'react';
import Experiencia from './Experiencia';

const Experiencias = (props) => {
    return ( 
<>
<div class="col-12 col-md-12 col-sm-12 opacar">


<h2 class="titulo" id="xp">Mi Experiencia laboral</h2>
</div>
        
<section class="portafolio">
            <Experiencia
            cargo1="Asesora de ventas"
            empresa1="Falabella"
            time1="3 Años"
             cargo3="Practicante Sistemas de Información"
             empresa3= "Industria de alimentos Zenú"
             time3="6 Meses"
            />
</section>

    </>
           
            
            

)
   }
 
export default Experiencias;