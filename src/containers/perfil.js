import React from 'react';
import {withRouter} from 'react-router-dom';
import {Icon , Divider} from 'antd';

class Perfil extends React.Component {

  state = {
    "pets": true,
    "ocupation": false,
    "birthdate": "1990-06-16T06:00:00.000+0000",
    "gender": true,
    "pMinAge": 20,
    "pLatitude": 19.370633,
    "uuid": "989fa2dc-f52b-45b2-be3f-55eddc68d9cc",
    "password": "",
    "pPets": 2,
    "smokes": true,
    "pAlcohol": 2,
    "pNoise": 1,
    "noise": true,
    "email": "non.dui@egetipsumSuspendisse.co.uk",
    "alcohol": false,
    "pSmokes": 2,
    "partyMonster": true,
    "pMaxAge": 26,
    "pLongitud": -99.261303,
    "pLocationRadius": 3,
    "lastname": "Sargent Clay",
    "pGender": 2,
    "pPartyMonster": 1,
    "pOcupacion": 1,
    "name": "Noah Zeph",
    "status": true
  }
  componentDidMount(){
    console.log(this.state);
    this.categorize();
  }
  categorize() {
    this.setState(
      {
        ...this.state, 
        gender: this.state.gender ? 'Hombre' : 'Mujer',
        smokes: this.state.smokes ? 'Fumador' : 'No Fumador',
        noise: this.state.noise ? 'Ruidoso' : 'Callado',
        alcohol: this.state.alcohol ? 'Bebedor' : 'No Bebedor',
        partyMonster: this.state.partyMonster ? 'Le Gusta la Fiesta' : 'No le Gusta la Fiesta',
        ocupation: this.state.ocupation ? 'Trabaja' : 'Estudia',
        pets: this.state.pets ? 'Tiene Mascotas' : 'No Tiene Mascotas',

        pPets: this.state.pPets === 0 ? 'No Quiere Mascotas' : this.state.pPets === 1 ? 'Prefie Mascotas' : 'No le Importan las Mascotas',
        pAlcohol: this.state.pAlcohol === 0 ? 'No Quiere Bebedores' : this.state.pAlcohol === 1 ? 'Prefie Bebedores' : 'No le Importan los Bebedores',
        pNoise: this.state.pNoise === 0 ? 'No Quiere Ruidosos' : this.state.pNoise === 1 ? 'Prefiere Ruidosos' : 'No le Importan los Ruidosos',
        pSmokes: this.state.pSmokes === 0 ? 'No Quiere Fumadores' : this.state.pSmokes === 1 ? 'Prefie Fumadores' : 'No le Importan los Fumadores',
        pGender: this.state.pGender === 0 ? 'Prefiere Mujeres' : this.state.pGender === 1 ? 'Prefie Hombres' : 'No le Importa el Género',
        pPartyMonster: this.state.pPartyMonster === 0 ? 'No Quiere Fiesteros' : this.state.pPartyMonster === 1 ? 'Prefie Fiesteros' : 'No le Importan los Fiesteros',
        pOcupacion: this.state.pOcupacion === 0 ? 'Prefiere Estudiantes' : this.state.pOcupacion === 1 ? 'Prefie Trabajadores' : 'No le Importan las Ocupaciones'
      }
    );
    
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    const mes = this.state.birthdate.substring(5, 7);
    const ano = this.state.birthdate.substring(0, 4);
    const dia = this.state.birthdate.substring(8, 10);
    return (
      <div className="perfil">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{margin: '5px'}} >
            <h4><strong>{this.state.name}  {this.state.lastname}</strong>
            <br /> 
            <span style={{fontWeight: '300', fontSize: '0.8em'}}>{dia + '/' + mes + '/' +ano}</span>
            <br/>
            <span style={{fontWeight: 'lighter'}} > {this.state.gender} </span> </h4>
          </div>
          <div style={{fontSize: '2em', margin: '30px 60px'}}>
            <Icon type="user" />
          </div>
        </div>
        <div  className="row" style={{padding:'15px'}}>
          <div className="col-md-6 seccionIzq">
            <Divider> Detalles Personales</Divider>
            <div className="col-md-9 offset-md-3">    
              <ul>
                <li>{this.state.ocupation}</li>
                <li>{this.state.smokes}</li>
                <li>{this.state.alcohol}</li>
                <li>{this.state.noise}</li>
                <li>{this.state.pets}</li>
                <li>{this.state.partyMonster}</li>
              </ul>
            </div>

          </div>
          <div className="col-md-6 ">
            <Divider> Preferencias Personales</Divider>
            <div className="row">
              <div className="col-md-4 offset-md-1">    
                <ul>
                  <li>{this.state.pOcupacion}</li>
                  <li>{this.state.pSmokes}</li>
                  <li>{this.state.pAlcohol}</li>
                  <li>{this.state.pNoise}</li>
                  <li>{this.state.pPets}</li>
                  <li>{this.state.pPartyMonster}</li>
                </ul>
              </div>
              <div className="col-md-5 offset-md-1">    
                <ul>
                  <li>Edad Mínima: {this.state.pMinAge}</li>
                  <li>Edad Máxima: {this.state.pMaxAge}</li>
                </ul>
              </div>
            </div>
          </div>
          <Divider>Propiedades</Divider>
        </div>
        
        
      </div>
    );
  }
}

export default withRouter(Perfil);