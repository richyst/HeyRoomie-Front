import React from 'react';
import { Layout } from 'antd';

import {Route, Switch, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';

import Home from '../../Home/home';

const { Content } = Layout;

const content = (props) => {
  console.log('[Content]', props);
  return (
    <Content style={{ margin: '0 16px' }}>
      {props.user ? <div style={{height: '32px'}} ></div> : null}

      <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          {props.user ? null : <Route path="/signin" exact component={Home} />}
        </Switch>
      </div>
    </Content>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(content));