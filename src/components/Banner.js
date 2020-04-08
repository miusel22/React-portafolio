import React from 'react';
import '../styles/Header.css';
import '../styles/style.css';
import yo  from '../img/yo.jpg';


const Banner = props => (
  
    <>
  
                
                
  
   <div class="container banner ">
        <div class="row">
            <div>
            <div class="col-md-6 col-md-offset-6">
              
                <img class=" img img-responsive" src={yo}/>
                </div>
           
            </div>
             <div class="col-md-6 col-md-offset- align-self-center align-items-center justify-content-justify">
                <br/><br/>
                <br/>
            
                <h2>{props.hola}<span>{props.span}</span> {props.fin} </h2>
              
            </div>
        </div>

    </div>
 
    </>
)

export default Banner;