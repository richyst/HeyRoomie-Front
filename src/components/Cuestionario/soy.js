import React from 'react';
import {Button, message} from 'antd'

import './cuestionario.css';

import PreguntaTexto from '../Utility/preguntaTexto';
import PreguntaRadio from '../Utility/preguntaRadio';
import { DatePicker } from 'antd';

const dateFormat = 'YYYY-MM-DD';

 class YoSoy extends React.Component {
  state = {
    name: '',
    lastname: '',
    gender: false,
    smokes: false,
    alcohol: false,
    pets: false,
    partyMonster: false,
    noise: false,
    occupation: false,
    birthdate: ''
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  validate = () => {
    if(this.state.name !== '' && this.state.lastname !== '' && this.state.birthdate !== '') {
      this.enviarInfo();
    }  else {
      message.error('No todos los campos están correctos, checa tu info');
    }
  }

  enviarInfo() {
    message.success('Exito! Pasa a la siguiente sección.')
  }
  render() {
    const opcionesGenero = [{
        name: 'Masculino',
        value: true
      },
      {
        name: 'Femenino',
        value: false
      },
    ];
    const opcionesSiNo = [{
        name: 'Si',
        value: true
      },
      {
        name: 'No',
        value: false
      },
    ];
    const opcionesOcupacion = [{
        name: 'Trabajo',
        value: true
      },
      {
        name: 'Estudio',
        value: false
      },
    ];

    return (
      <React.Fragment>
        <h5>Cuéntanos de ti...</h5>
        <div className="row contenedor" >
          
          <div className="col-sm-12 col-md-6 seccionIzq seccion">
            <PreguntaTexto 
              type="text"
              label="Nombre" 
              placeholder="Escribe tu nombre..." 
              value={this.state.name} 
              onChange={(event)=> this.setState({...this.state, name: event.target.value})}  
              />
            <PreguntaTexto 
              type="text"
              label="Apellidos" 
              placeholder="Escribe tu apellido..." 
              value={this.state.lastname} 
              onChange={(event)=> this.setState({...this.state, lastname: event.target.value})}  
              />
            <PreguntaRadio
              label="Género"
              value={this.state.gender}
              options={opcionesGenero}
              onChange={(event) => this.setState({...this.state, gender:event.target.value}) }
              />
            <PreguntaRadio
              value={this.state.occupation}
              label="¿A qué te dedicas?"
              options={opcionesOcupacion}
              onChange={(event) => this.setState({...this.state, occupation:event.target.value}) }
              />
            <h6>¿Cuándo es tu cumpleaños?</h6>
            <DatePicker  
              placeholder="Escoge una fecha..."
              onChange={(date, string) => this.setState({...this.state, birthdate: string})}
              format={dateFormat}
              />
          </div>
          <div className="col-sm-12 col-md-6 seccion">
            <PreguntaRadio
              label="¿Fumas?"
              value={this.state.smokes}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, smokes:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Bebes?"
              value={this.state.alcohol}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, alcohol:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Eres ruidoso?"
              value={this.state.noise}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, noise:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Te gusta la fiesta?"
              value={this.state.partyMonster}
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, partyMonster:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tienes mascotas?"
              options={opcionesSiNo}
              value={this.state.pets}
              onChange={(event) => this.setState({...this.state, pets:event.target.value}) }
              />
            <div style={{marginLeft: '30%'}}>
              <Button onClick={this.validate} type="primary">Enviar</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  };
}


export default YoSoy;