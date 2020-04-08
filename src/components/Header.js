import React from 'react';
import '../styles/Header.css';
import '../styles/style.css';
import {Nav} from './Nav';


const Header  = props => (
    <>

     <header>
     <div class="header">

        <div class="container-{breakpoint}  justify-content-center">
            <nav class="navbar navbar-inverse  navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <a class="navbar-brand" href="#">
                    <h2 class="nombre">Maria Camila Vélez Hola</h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                   <Nav
                   acerca="A cerca de mi"
                   contactame="Contáctame"
                   proyectos="Mis proyectos"/>
                </div>
            </nav>
        </div>
        </div>

        </header>
    </>
)

export default Header;