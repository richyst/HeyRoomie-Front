import React from 'react';

import { Button, message } from 'antd'

import PreguntaTexto from '../Utility/preguntaTexto';
import './cuestionario.css';

import PreguntaRadio from '../Utility/preguntaRadio';
// import Mapa from '../Utility/mapa';
export default class casa extends React.Component{
  state = {
    dueno: false,
    rooms: 0,
    pets: false,
    restrooms: 0,
    kitchen: false,
    livingroom: 0,
    garage: 0,
    parkingSpaceAvailable: 0,
    roomies: 0,
    wifi: 0,
    type: 0,
    latitud: 0.0,
    longitud: 0.0,
    externals: 0,
    extraInfo: '',
    user: ''
  }

  componentDidUpdate() {
    console.log('[Casa]',this.state);
  }
  validate = () => {
    if (this.state.pMaxAge !== '' && this.state.pMinAge) {
      this.enviarInfo();
    } else {
      message.error('No todos los campos están correctos, checa tu info');
    }
  }

  enviarInfo() {
    message.success('Exito! Pasa a la siguiente sección.')
  }

  render(){
    const opcionesSiNo = [
      {
        name: 'Si',
        value: 1
      },
      {
        name: 'No',
        value: 0
      },
      {
        name: 'Me Vale',
        value: 2
      }
      
    ];

    return (
      <React.Fragment>
          <PreguntaRadio
            label="¿Ya tienes casa?"
            value={this.state.dueno}
            options={opcionesSiNo}
            onChange={(event) => this.setState({...this.state, dueno:event.target.value}) }
            />
        {this.state.dueno ?  
        
        <div className="row contenedor" >
          <div className="col-sm-12 col-md-4 seccionIzq seccionNumber">
            <PreguntaTexto 
              type="number"
              label="¿Cuántos cuartos tiene?" 
              placeholder="Ej. 5" 
              value={this.state.rooms} 
              onChange={(event)=> this.setState({...this.state, rooms: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label="¿Cuaántos baños tienes?" 
              placeholder="Ej. 3" 
              value={this.state.restrooms} 
              onChange={(event)=> this.setState({...this.state, restrooms: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label="¿Cuántos lugares de estacionamiento de garage?" 
              placeholder="Ej. 3" 
              value={this.state.garage} 
              onChange={(event)=> this.setState({...this.state, garage: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label = "¿Cuántos lugares de estacionamiento en el exterior?"
              placeholder="Ej. 4" 
              value={this.state.parkingSpaceAvailable} 
              onChange={(event)=> this.setState({...this.state, parkingSpaceAvailable: event.target.value})}  
              /> 
            
              {/* <div style={{height: '100px', width:'400px'}}>
                  <Mapa />
              </div> */}
          </div>
          <div className="col-sm-12 col-md-4 seccionIzq seccionNumber">
              <PreguntaTexto 
              type="number"
              label="¿Cuántos cuartos tiene?" 
              placeholder="Ej. 5" 
              value={this.state.rooms} 
              onChange={(event)=> this.setState({...this.state, rooms: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label="¿Cuaántos baños tienes?" 
              placeholder="Ej. 3" 
              value={this.state.restrooms} 
              onChange={(event)=> this.setState({...this.state, restrooms: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label="¿Cuántos lugares de estacionamiento de garage?" 
              placeholder="Ej. 3" 
              value={this.state.garage} 
              onChange={(event)=> this.setState({...this.state, garage: event.target.value})}  
              />
            <PreguntaTexto 
              type="number"
              label = "¿Cuántos lugares de estacionamiento en el exterior?"
              placeholder="Ej. 4" 
              value={this.state.parkingSpaceAvailable} 
              onChange={(event)=> this.setState({...this.state, parkingSpaceAvailable: event.target.value})}  
              />       
            
              {/* <div style={{height: '100px', width:'400px'}}>
                  <Mapa />
              </div> */}
          </div>
          <div className="col-sm-12 col-md-4 seccionNumber seccionIzq">
            <PreguntaRadio
              label="¿Fume?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, smokes:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Beba?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, alcohol:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Sea ruidoso?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, noise:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Le guste la fiesta?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, partyMonster:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tenga mascotas?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pets:event.target.value}) }
              />

          </div>
            <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <Button onClick={this.validate} type="primary">Enviar</Button>
            </div>
        </div> 
        : 
        null}
      </React.Fragment>
    );
  }
}