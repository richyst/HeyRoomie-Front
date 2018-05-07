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
    gender: 0,
    smokes: 0,
    alcohol: 0,
    pets: 0,
    partyMonster: 0,
    noise: 0,
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
        value: 1
      },
      {
        name: 'Femenino',
        value: 0
      },
    ];
    const opcionesSiNo = [{
        name: 'Si',
        value: 1
      },
      {
        name: 'No',
        value: 0
      },
    ];
    const opcionesOcupacion = [{
        name: 'Trabajo',
        value: 1
      },
      {
        name: 'Estudio',
        value: 0
      },
    ];

    return (
      <React.Fragment>
        <h5>Cuéntanos de ti...</h5>
        <div className="row contenedor" >
          
          <div className="col-sm-12 col-md-6 seccionIzq seccion">
            <PreguntaTexto 
              label="Nombre" 
              placeholder="Escribe tu nombre..." 
              value={this.state.name} 
              onChange={(event)=> this.setState({...this.state, name: event.target.value})}  
              />
            <PreguntaTexto 
              label="Apellidos" 
              placeholder="Escribe tu apellido..." 
              value={this.state.lastname} 
              onChange={(event)=> this.setState({...this.state, lastname: event.target.value})}  
              />
            <PreguntaRadio
              label="Género"
              options={opcionesGenero}
              onChange={(event) => this.setState({...this.state, gender:event.target.value}) }
              />
            <PreguntaRadio
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
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, smokes:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Bebes?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, alcohol:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Eres ruidoso?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, noise:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Te gusta la fiesta?"
              options={opcionesSiNo}
              onChange={(event) => this.setState({...this.state, partyMonster:event.target.value}) }
              />
            <PreguntaRadio
              label="¿Tienes mascotas?"
              options={opcionesSiNo}
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