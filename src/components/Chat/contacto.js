import React from 'react';
import { List, Avatar } from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const contacto = (props) => {

  return (
    <List.Item style={{cursor: 'pointer'}} onClick={() => props.onUserClicked(props.title)} >
      <List.Item.Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={<span style={{fontSize: '1.3em'}} >{props.title}</span> }
        description="Haz click para abrir la conversación."
      />
    </List.Item>
  );

}

const mapDispatchToProps = dispatch => {
  return {
    onUserClicked: (id) => dispatch(actionCreators.userClicked(id))
  };
};
export default connect(null, mapDispatchToProps)(contacto);