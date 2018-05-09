import React from 'react';
import PreguntaTexto from '../Utility/preguntaTexto';
import {Button } from 'antd';

const signUp = (props) => {

  return (
    <div>
      <h5 style={{textAlign: 'center', margin: '20px'}}>No te vas a arrepentir...</h5>
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
        <Button type="primary" onClick={props.register}> Registrarme </Button>
      </div>
      
    </div>
  );
}

export default signUp;