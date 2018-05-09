import React from 'react';
import { Layout } from 'antd';

import {Route, Switch, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';

import Home from '../../Home/home';
import Cuestionario from '../../Cuestionario/cuestionario';
import Usuarios from '../../../containers/usuarios';

const { Content } = Layout;

class content extends React.Component {

  render() {
    let estilo = null;
    let estiloMain = null;
    if(this.props.user) {
      estilo = 
      {
        padding: 24,
        background: '#fff',
        minHeight: '80vh'
      }; 
      estiloMain = {
        margin: '0 16px'
      }
    } else {
      estilo = {}
      estiloMain = {}
    }

    return (
      <Content style={estiloMain}>
        {this.props.user ? <div style={{height: '32px'}} ></div> : null}

        <div style={estilo}>
          <Switch>
            {this.props.user ? null : <Route path="/" exact component={Home} />}
            <Route path="/" exact component={Home} />
            <Route path="/perfil/cuestionario" exact component={Cuestionario} />
            {this.props.user ? null : <Route path="/signin" exact component={Usuarios} />}
          </Switch>
        </div>
      </Content>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    access: state.login.access
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(content));