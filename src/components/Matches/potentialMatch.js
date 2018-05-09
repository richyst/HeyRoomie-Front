import React from 'react';
import {List, Icon, Avatar} from 'antd';
import {Link, withRouter} from 'react-router-dom';


const potentialMatch = (props) => {
    return (
      <List.Item
        key={props.key}
        actions=
        {
          [
            <Icon onClick={() => props.acceptMatch(props.id)} type="like-o" />, 
            <Icon onClick={() => props.rejectMatch(props.id)}   type="dislike-o" />
          ]
        }
        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
        <List.Item.Meta
          avatar={<Avatar src={props.avatar} />}
          title={<Link to={'/perfil/' + props.id}>{props.title}</Link>}
          description={props.description}
          />
        {props.content}
      </List.Item>
    );
  
}

export default withRouter(potentialMatch);