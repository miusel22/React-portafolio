import React from 'react';
import Header from '../components/Header';
import Acerca from '../components/Acerca';
import Banner from '../components/Banner';
import Main from '../components/Main';
import '../styles/style.css';
import Footer from '../components/Footer';


const App = () => {
  return (//desde el padre podemos controlar el estado global.
    //le estamos enviando los props de acuerdo al arreglo que hicimos.
    <> 
  <div class="container">
      <Header
    
      />
      <br></br>
     <Banner
     hola="Hola! soy "
     span="camila"
     fin =" y soy desarrolladora Front End. "
     />
     <Acerca
     tittle= "A cerca de mi"
     description="Soy una persona responsable, dinámica y con muchas ganas de aprender. Me apasiona la programación con énfasis en ReactJS. Tengo experiencia en atención al usuario y muy buenas relaciones interpersonales. "
     />
     <Main />
     <Footer/>
   
     </div>
 
    </>
  );
}

export default App;
