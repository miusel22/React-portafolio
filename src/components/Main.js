import React, { Component } from 'react';
import '../styles/Header.css';
import '../styles/style.css';
import Projets from './Projets';
import Experiencias from './Experiencias';
import Educaciones from './Educaciones';



//extends-HAGA UNA HERENCIA
class Main extends Component {

   
  constructor(props){
    super(props);
  }
  render() {
    return (
      
        <>
        <Educaciones/>
        <Projets Data={this.props.Data}/>
        
         <Experiencias/>
         

    </>
    );
  }
}

export default Main;
