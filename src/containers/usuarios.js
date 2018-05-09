import React from 'react';
import Center from '../components/Login/center';
import ImagenHome from '../components/UI/Visuals/imagenHome';

import '../components/Utility/estilos.css';
class Usuarios extends React.Component {
  state = {
    login: true
  }
  render(){
    return (
      <div>
        <div>
          <ImagenHome />
        </div>
        <div className="usuarios">
          <Center/>
        </div>
      </div>
      
    );
  }
 
}

export default Usuarios;