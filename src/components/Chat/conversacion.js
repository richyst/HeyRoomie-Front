import React from 'react';
import {connect} from 'react-redux';
import axios from '../../axios';

 const mensajes = [];
 for (let i = 0; i < 23; i++) {
   mensajes.push({
     sender: i % 2 === 0 ? `Ricardo Salcedo ${i}` : `Vincent Balam ${i}`,
     received: true ,
     id: i,
     match: 'df2534fe-caab-4613-a643-ab980b23497f',
     message: 'bla bla bla bla bla test teste test',
     seen: true,
   });
 }

class conversacion extends React.Component {
  state = {
    mensajes: []
  }
  componentDidMount() {
    console.log(this.state);
    this.getInfo();
  }
  getInfo = () => {
    const body = {
      uuid: this.state.match
    }
    axios.post('/chat',body ).then(
      res => this.setState({...this.state, mensajes: res.data.payload})
    )
  }
  render = () => {

    return (
      <div >
        { this.props.id ? this.state.mensajes.map(
          item => {
            return  <h5 key={item.id} > {this.props.id}</h5>;
          }
        ): null}
        
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    id: state.chat.id,
    user: state.login.user
  };
};
export default connect(mapStateToProps, null) (conversacion);