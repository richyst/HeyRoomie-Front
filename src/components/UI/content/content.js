import React from 'react';
import { Layout } from 'antd';

import {Route, Switch, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import MatchedToBe from '../../Matches/MatchedToBe';

import Cuestionario from '../../Cuestionario/cuestionario';
import Usuarios from '../../../containers/usuarios';
import Perfil from '../../../containers/perfil';
import Chat from '../../Chat/chat';
const { Content } = Layout;

class content extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }
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
            {this.props.user ? <Route path="/perfil/cuestionario" exact component={Cuestionario} /> : null}
            {this.props.user ? <Route path="/matches" exact component={MatchedToBe} /> : null}
            {this.props.user ? <Route path="/chats" exact component={Chat} /> : null}
            {this.props.user ? <Route path="/perfil/:id" component={Perfil} /> : null}
            {this.props.user ? <Route path="/perfil/" component={Perfil} /> : null}
            {this.props.user ? <Route path="/" component={MatchedToBe} /> : null}

            {this.props.user ? null : <Route path="/"  component={Usuarios} />}
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