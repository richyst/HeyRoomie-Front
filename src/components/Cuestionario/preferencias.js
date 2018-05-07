import React from 'react';

import { Button, message } from 'antd'

import './cuestionario.css';

import PreguntaTexto from '../Utility/preguntaTexto';
import PreguntaRadio from '../Utility/preguntaRadio';

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
    pLocationRadius: 0
  }

  componentDidUpdate() {
    console.log('[Prefs]',this.state);
  }
  validate = () => {
    if (this.state.name !== '' && this.state.lastname !== '' && this.state.birthdate !== '') {
      this.enviarInfo();
    } else {
      message.error('No todos los campos están correctos, checa tu info');
    }
  }

  enviarInfo() {
    message.success('Exito! Pasa a la siguiente sección.')
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
        <h5>Quieres que tu roomie...</h5>
        <div className="row contenedor" >
          <div className="col-sm-12 col-md-6 seccionIzq seccion">
            <PreguntaTexto 
              label="Tenga al menos:" 
              placeholder="x años..." 
              value={this.state.pMinAge} 
              onChange={(event)=> this.setState({...this.state, pMinAge: event.target.value})}  
              />
            <PreguntaTexto 
              label="Tenga máximo" 
              placeholder="x años..." 
              value={this.state.pMaxAge} 
              onChange={(event)=> this.setState({...this.state, pMaxAge: event.target.value})}  
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
    );
  }
}

export default preferencias;