import React from 'react';
import axiosInst from '../../axios';
import { Button, Input, message } from 'antd'

import './cuestionario.css';
import {connect } from 'react-redux';
import PreguntaRadio from '../Utility/preguntaRadio';
// import Mapa from '../Utility/mapa';

const InputGroup = Input.Group;
class preferencias extends React.Component{
  state = {
    pMinAge: '',
    pMaxAge: '',
    pGender: 0,
    pAlcohol: 0,
    pSmokes: 0,
    pPets: 0,
    pPartyMonster: 0,
    pNoise: 0,
    pOcupacion: 0,
    pLatitude: 0,
    pLongitude: 0,
    pLocationRadius: 0,
    uuid: this.props.user
  }

  // componentDidMount() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(position);
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  componentDidUpdate() {
    console.log('[Prefs]',this.state);
  }
  validate = () => {
    if (this.state.pMaxAge !== '' && this.state.pMinAge) {
      this.enviarInfo();
    } else {
      message.error('No todos los campos están correctos, checa tu info');
    }
  }

  enviarInfo() {
    axiosInst.put('/user', this.state).then(
      res => {
        console.log(res);
      }
    ).catch(error => {
      console.log(error);
    })
  }
  render(){
    const opcionesGenero = [{
        name: 'Masculino',
        value: 1
      },
      {
        name: 'Femenino',
        value: 0
      },
      {
        name: 'Me Vale',
        value: 2
      }
    ];
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
    const opcionesOcupacion = [{
        name: 'Trabajar',
        value: 1
      },
      {
        name: 'Estudiar',
        value: 0
      },
      {
        name: 'Me Vale',
        value: 2
      }
    ];
    return (
      <React.Fragment>
        <h5>Quieres que tu roomie...</h5>
        <div className="row contenedor" >
          <div className="col-sm-12 col-md-6 seccionIzq seccion">
            <h6>Tenga una edad </h6>
            <InputGroup compact style={{marginBottom: '30px'}}>
              <Input 
                type="number"
                value={this.state.pMinAge} 
                onChange={(event) => this.setState({...this.state, pMinAge: event.target.value})} 
                style={{ width: 100, textAlign: 'center' }} placeholder="mínima" 
                />
              <Input 
                style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }} 
                placeholder="y" 
                disabled 
                />
              <Input 
                type="number"
                value={this.state.pMaxAge}
                onChange={(event) => this.setState({...this.state, pMaxAge: event.target.value})} 
                style={{ width: 100, textAlign: 'center', borderLeft: 0 }} 
                placeholder="máxima" 
                />
            </InputGroup>            
            <PreguntaRadio
              label="Género"
              value={this.state.pGender}
              options={opcionesGenero}
              onChange={(event) => this.setState({...this.state, pGender:event.target.value}) }
              />
            <PreguntaRadio
              label="Que se dedique a"
              value={this.state.pOcupacion}
              options={opcionesOcupacion}
              onChange={(event) => this.setState({...this.state, pOcupacion:event.target.value}) }
              />
              {/* <div style={{height: '100px', width:'400px'}}>
                  <Mapa />
              </div> */}
          </div>
          <div className="col-sm-12 col-md-6 seccion">
            <PreguntaRadio
              label="¿Fume?"
              value={this.state.pSmokes}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pSmokes:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Beba?"
              value={this.state.pAlcohol}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pAlcohol:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Sea ruidoso?"
              value={this.state.pNoise}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pNoise:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Le guste la fiesta?"
              value={this.state.pPartyMonster}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pPartyMonster:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tenga mascotas?"
              value={this.state.pPets}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, pPets:event.target.value}) }
              />
            <div style={{marginLeft: '30%'}}>
              <Button onClick={this.validate} type="primary">Enviar</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};
export default connect(mapStateToProps, null) (preferencias);