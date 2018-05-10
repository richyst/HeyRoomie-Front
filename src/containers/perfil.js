import React from 'react';
import {withRouter} from 'react-router-dom';
import {Icon , Divider} from 'antd';
import Axios from '../axios';
import {connect} from 'react-redux';

class Perfil extends React.Component {

  state = {
  }
  componentDidMount(){
    console.log(this.props);
    this.getInfo();
  }
  categorize() {

    this.setState(
      {
        ...this.state, 
        casa: [],
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
    )
    
  }
  getInfo = () => {
    let id = this.props.match.params.id ? this.props.match.params.id: this.props.user;
    Axios.get('/user/'+ id).then(
      res=> {
        console.log(res.data.payload)
        this.setState({
          ...this.state,
          ...res.data.payload
        })
        this.categorize();
      }
    );
    Axios.post('/places', {uuid: this.props.user}).then(
      res=> {
        this.setState({...this.state, casa: Object.values(res.data.payload)})
        console.log(Object.values(res.data.payload));
      }
    )
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    // const mes = this.state.birthdate.substring(5, 7);
    // const ano = this.state.birthdate.substring(0, 4);
    // const dia = this.state.birthdate.substring(8, 10);
    return (
      <div className="perfil">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{margin: '5px'}} >
            <h4><strong>{this.state.name}  {this.state.lastname}</strong>
            <br /> 
            {/* <span style={{fontWeight: '300', fontSize: '0.8em'}}>{dia + '/' + mes + '/' +ano}</span> */}
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
          {/* <div className="row">
              <div className="col-md-4 offset-md-1">    
                <ul>
                  <li>{this.state.casa.}</li>
                  <li>{this.state.casa.}</li>
                  <li>{this.state.casa.}</li>
                  <li>{this.state.casa.}</li>
                  <li>{this.state.casa.}</li>
                  <li>{this.state.casa.}</li>
                </ul>
              </div>
              <div className="col-md-5 offset-md-1">    
                <ul>
                  <li>Edad Mínima: {this.state.casa.}</li>
                  <li>Edad Máxima: {this.state.casa.}</li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}
        </div>
        
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.login.user
  };
};


export default withRouter( connect(mapStateToProps, null) (Perfil));