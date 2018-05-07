import React from 'react';
import { Layout, Icon, Button } from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions/index';


const { Header } = Layout;

const header = (props) => {
  console.log('[header]', props)
  return (
    <Header style={{ background: '#fff', padding: 0, display: 'flex'}} >
      <div style={{display: 'inline-block'}} >
        <Icon
          className="trigger"
          type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={props.onToggle}
        />
        
      </div>
      <div style={{marginLeft: '80%'}} >
        <Button type="primary" onClick={props.onLogout} >Logout</Button>
      </div>
      
    </Header>
  );
}

const mapStateToProps = state => {
  return {
    collapsed: state.side.collapsed,
    user: state.login.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(actionCreators.toggle()),
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (header);