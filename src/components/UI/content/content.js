import React from 'react';
import { Layout } from 'antd';

import {Route, Switch, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';

import Home from '../../Home/home';
import Cuestionario from '../../Cuestionario/cuestionario';

const { Content } = Layout;

class content extends React.Component {

  render() {
      return (
    <Content style={{ margin: '0 16px' }}>
      {this.props.user ? <div style={{height: '32px'}} ></div> : null}

      <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/perfil/cuestionario" exact component={Cuestionario} />
          {this.props.user ? null : <Route path="/signin" exact component={Home} />}
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