import React from 'react';
import { Layout, Icon } from 'antd';

import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';


const { Header } = Layout;

const header = (props) => {
  return (
    <Header style={{ background: '#fff', padding: 0 }} >
      <div >
        <Icon
          className="trigger"
          type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={props.onToggle}
        />
      </div>
    </Header>
  );
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

export default connect(mapStateToProps, mapDispatchToProps) (header);