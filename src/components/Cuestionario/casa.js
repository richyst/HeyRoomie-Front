import React from 'react';
import { Button, message } from 'antd';
import PreguntaTexto from '../Utility/preguntaTexto';
import './cuestionario.css';
import {withRouter} from  'react-router-dom';
import PreguntaRadio from '../Utility/preguntaRadio';
import PreguntaArea from '../Utility/preguntaArea';
import {connect} from 'react-redux'
import axiosInst from '../../axios';
// import Mapa from '../Utility/mapa';
class Casa extends React.Component{
  state = {
    dueno: false,
    rooms: 1,
    pets: false,
    restrooms: 1,
    kitchen: false,
    livingroom: false,
    garage: 0,
    parkingSpaceAvailable: 0,
    roomies: 0,
    wifi: false,
    type: 0,
    latitud: 0.0,
    longitud: 0.0,
    externals: false,
    greenArea: false,
    extraInfo: '',
    user: this.props.user
  }

  componentDidUpdate() {
    console.log('[Casa]',this.state , this.props);
  }
  validate = () => {
    if (this.state.dueno) {
      if (this.state.rooms >= 1 ){
        this.enviarInfo();
      }
    } else {
      message.success('Listo!')
      this.props.history.push('/')

    }
  }

  enviarInfo() {
    const {
      dueno,
      ...body
    } = this.state;

    console.log(body);
    axiosInst.post('/place', body).then(
      res => {
        console.log(res);
      }
    ).catch ( error => {
      console.log(error);
    })
  }
  render(){
    const opcionesSiNo = [
      {
        name: 'Si',
        value: true
      },
      {
        name: 'No',
        value: false
      }
      
    ];
    const opcionesCasaDep = [{
        name: 'Casa',
        value: 1
      },
      {
        name: 'Departamento',
        value: 0
      }

    ];

    return (
      <React.Fragment>
        <div style={{margin: 'auto', width: '170px'}}>
          <PreguntaRadio
            label="¿Ya tienes casa?"
            value={this.state.dueno}
            options={opcionesSiNo}
            onChange={(event) => this.setState({...this.state, dueno:event.target.value })}
            />        
        </div>
        <hr/>
        {this.state.dueno ?  
        
        <div className="row contenedor" >
          <div className="col-sm-12 col-md-4 seccionIzq seccionNumber">
            <PreguntaTexto 
              type="number"
              label="¿Cuántos roomies tiene?" 
              placeholder="Ej. 5" 
              value={this.state.rooms} 
              onChange={(event)=> this.setState({...this.state, roomies: event.target.value})}  
              />

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
            <PreguntaRadio
              label="¿Tene cocina?"
              value={this.state.kitchen}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, kitchen:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tiene sala de estar?"
              value={this.state.livingroom}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, livingroom:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tiene WiFi?"
              value={this.state.wifi}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, wifi:event.target.value}) }
              />  
            <PreguntaRadio
              label="¿Permite visitas?"
              value={this.state.externals}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, externals:event.target.value}) }
              />  
            <PreguntaRadio
              label="¿Es casa o depa?"
              value={this.state.type}
              options={opcionesCasaDep}
              onChange={(event) => this.setState({...this.state, type:event.target.value}) }
              />  
            
            <PreguntaRadio
              label="¿Tiene áreas verdes?"
              value={this.state.greenArea}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, smokes:event.target.value}) }
              />
          </div>
          <div className="col-sm-12 col-md-4 seccionNumber seccionIzq">
            <PreguntaArea 
              label="¿Tiene áreas verdes?"
              placeholder="Puede ser el servicio de limpieza o mantenimiento..." 
              value={this.state.extraInfo}
              onChange={(event) => this.setState({...this.state, extraInfo:event.target.value})}
              />
          </div>
        </div> 
        : 
        null}
         <div style={{marginLeft: 'auto', marginRight: 'auto', width:'10%'}}>
          <Button onClick={this.validate} type="primary">Enviar</Button>
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

export default withRouter( connect(mapStateToProps, null) (Casa));