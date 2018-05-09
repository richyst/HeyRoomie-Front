import React from 'react';
import PreguntaTexto from '../Utility/preguntaTexto';
import {Button } from 'antd';
const signIn = (props) => {
  return (
    <div>
      <PreguntaTexto 
        type="text"
        placeholder="Username..." 
        value={props.user} 
        onChange={(event)=> props.onUserChange(event.target.value)}  
        />
      <PreguntaTexto 
        type="password"
        placeholder="Password..." 
        value={props.password} 
        onChange={(event)=> props.onPasswordChange(event.target.value)}  
        />
      <div style={{textAlign: 'center'}}>
        <Button type="primary" onClick={props.login}> Iniciar Sesión </Button>
      </div>
      
    </div>
  );
}
export default signIn;