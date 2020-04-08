import React from 'react';

//*exportación directa. hay que destructurar, sacar de su forma nativa
export class Nav extends React.Component{

constructor(props){
super(props);
}
render(){
   const  {acerca,contactame,proyectos}=this.props;

    return(
        <nav className="nav-bar ">

<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active text-white" href="#inicio">Inicio <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link text-white" href="#yo">{acerca}</a>
                        <a class="nav-item nav-link text-white" href="#port">{proyectos}</a>
                        
                    </div>
                </div>
              

      
    </nav>
    );
}

}