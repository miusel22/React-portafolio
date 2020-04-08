

import React , {Component} from 'react';
import '../styles/Header.css';
import '../styles/style.css';


class Acerca extends  Component{

    constructor(props){

        super(props);
    }
    render(){

        
        return(
    <>
    <body>

    <div class="col-12 col-md-12 col-sm-12 opacar">


<h2 class="titulo" id="yo">{this.props.tittle}</h2>
</div>
<div class="container descripcion">

<div class="row">
    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-3 ml-5">
        <p>{this.props.description}</p>
    </div>
</div>
</div>
<hr/>


  </body>
    </>
        )
}};

export default Acerca;