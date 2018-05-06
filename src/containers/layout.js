import React from 'react';

import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/index';

import { Layout } from 'antd';
import Footer from '../components/UI/footer/footer';
import Content from '../components/UI/content/content';
import Header from '../components/UI/header/header';
import Sidebar from '../components/UI/sidebar/sidebar';



class layout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={this.props.collapsed} onCollapse={this.props.onCollapse} />
        <Layout>
          <Header  />
          <Content collapseSidebar={this.props.onToggle} />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    collapsed: state.side.collapsed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(actionCreators.toggle())
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (layout);