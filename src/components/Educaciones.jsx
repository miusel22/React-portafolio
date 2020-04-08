import React from 'react';
import Educacion from './Educacion';

const Educaciones = (props) => {
    return ( 
<>
<div class="col-12 col-md-12 col-sm-12 opacar">


<h2 class="titulo" id="xp">Educación</h2>
</div>
        
<section class="edu">

<div class="w-100">
            <Educacion
            lugar1="Institucíon Educativa san vicente de paul"
            edu1="Bachillerato prom 2015"
            lugar2="Academia Geek"
             edu2="Programación web front-end"
             lugar3= "Instituto Tecnológico Metropolitano"
             edu3="Sistemas de información (en curso)"
            />
 </div>
 </section>
 



    </>
           
            
            

)
   }
 
export default Educaciones;