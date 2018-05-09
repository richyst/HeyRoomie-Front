import React from 'react';
import {List, Icon, Avatar} from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const potentialMatch = (props) => {

  return (
    <List.Item
      key={props.key}
      actions=
      {
        [
          <IconText type="star-o" text="156" />, 
          <IconText type="like-o" text="156" />, 
          <IconText type="message" text="2" />
        ]
      }
      extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
      >
      <List.Item.Meta
        avatar={<Avatar src={props.avatar} />}
        title={<a href={props.href}>{props.title}</a>}
        description={props.description}
        />
      {props.content}
    </List.Item>
  );

}

export default potentialMatch;