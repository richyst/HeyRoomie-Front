import React from 'react';
import SignIn from './signin';
import SignUp from './signup';
import '../Utility/estilos.css';
import AxiosInst from '../../axios';
import PreguntaRadio from '../Utility/preguntaRadio';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import {message } from 'antd';
import Logo from '../UI/Visuals/logo';

class Center extends React.Component {
  state = {
    view : 'signup',
    inUsername: '',
    inPassword: '',
    upUsername: '',
    upPassword: ''
  }


  inUsernameChange = (username)=> {
    console.log(username);
    this.setState({
      ...this.state,
      inUsername: username
    })
  }
  inPasswordChange = (password) => {
    console.log(password)
    this.setState({
      ...this.state,
      inPassword: password
    })
  }

  upUsernameChange = (username) => {
    console.log(username);
    this.setState({
      ...this.state,
      upUsername: username
    })
  }
  upPasswordChange = (password) => {
    console.log(password)
    this.setState({
      ...this.state,
      upPassword: password
    })
  }


  login = () => {
    const body = {
      username: this.state.inUsername,
      password: this.state.inPassword
    }
    if(this.state.inPassword !== '' && this.state.inUsername !== ''){
      AxiosInst.post('/login', body).then(
        res => {
          console.log(res);
          this.props.history.push("/");
          this.props.onLogin({
            user: {
              user: body.username,
              access: res.access_token
            }
          })
        }
      ).catch(
        error=> {
          console.log(error);
        }
      )
    }else{
      message.error('Te falta llenar bien los campos.')
    }
  }

  register = () => {
    const body = {
      username: this.state.upUsername,
      password: this.state.upPassword
    }
    if (this.state.upPassword !== '' && this.state.upUsername !== '') {
      AxiosInst.post('/register', body).then(
        res => {
          console.log(res);
          this.props.history.push("/");
          this.props.onLogin({
            user: {
              user: body.username,
              access: res.access_token
            }
          })
        }
      ).catch(
        error => {
          console.log(error);
        }
      )
    } else {
      message.error('Te falta llenar bien los campos.')
    }
  }
  
  render () {
    const opciones = [
      {
        name: 'SignUp',
        value: 'signup'
      }
    ]
    return (
      <div className="centroUsuarios">
        <Logo />
        <div className="decisiones">
          <PreguntaRadio
              value={this.state.view}
              options={opciones}
              onChange={(event) => this.setState({view:event.target.value}) }
              />
        </div>
        {(this.state.view === 'signin') ? 
        <SignIn 
          login={this.login}
          user={this.state.inUsername}
          password = {this.state.inPassword}
          onUserChange={this.inUsernameChange} 
          onPasswordChange = {this.inPasswordChange}
          /> 
        : 
        <SignUp 
          register={this.register}
          user={this.state.upUsername}
          password = {this.state.upPassword}
          onUserChange={this.upUsernameChange} 
          onPasswordChange = {this.upPasswordChange}
          />}
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user) => dispatch(actionCreators.login(user))
  };
};
export default withRouter(connect(null, mapDispatchToProps)(Center));