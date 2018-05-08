import React from 'react';

import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';

import { withRouter } from 'react-router-dom';

import { Layout } from 'antd';
import Footer from '../components/UI/footer/footer';
import Content from '../components/UI/content/content';
import Header from '../components/UI/header/header';
import Sidebar from '../components/UI/sidebar/sidebar';

class layout extends React.Component {
  render() {
    let contenido = [];
    if (this.props.user) {
      contenido = <Layout style={{ minHeight: '100vh' }}>
                    <Sidebar collapsed={this.props.collapsed} onCollapse={this.props.onCollapse} />
                    <Layout>
                      <Header  />
                      <Content />
                      <Footer />
                    </Layout>
                  </Layout>  ;
    } else {
      contenido =<Content />;
    }

    return (
      <React.Fragment>
        {contenido}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    collapsed: state.side.collapsed,
    user: state.login.user,
    access: state.login.access
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(actionCreators.toggle())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (layout));