

import React , {Component} from 'react';

import '../styles/style.css';


class Footer extends  Component{

    constructor(props){

        super(props);
    }
    render(){

        
        return(
    <>
  <footer className="Footer">
        <div class="container footer">
            <div class="footer__sections">
                <div class="foo">
                    <h3>Contáctame</h3>
                    <br>
                    </br>
                        <h4>mariavelez237306@correo.itm.edu.co</h4>
                        <br>
                    </br>
                        
              </div>
                <section>
                <div class="d-flex justify-content hover ">
                <a class="icon" href="https://twitter.com/?lang=es" target="_blank "><i
                        class="fab fa-twitter ml-3"></i></a>
                <a href="https://www.linkedin.com/in/camila-velez-a746261a2/ " target="_blank "><i
                        class="fab fa-linkedin-in ml-3 "></i></a>
                <a href="https://github.com/miusel22 " target="_blank "><i
                        class="fab fa-github-alt ml-3 "></i></a>
                <a href="https://www.linkedin.com/in/camila-velez-a746261a2/ " target="_blank "><i
                        class="fab fa-instagram ml-3 "></i></a>
            </div>
                </section>
            </div>
        </div>
        </footer>
    </>
        )
}};

export default Footer;