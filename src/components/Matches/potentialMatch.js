import React from 'react';
import {List, Icon} from 'antd';
import { withRouter} from 'react-router-dom';

import InfoMatch from './infoMatch';

class  potentialMatch extends React.Component {
  render() {
    return (
      <List.Item
        key={this.props.key}
        actions=
        {
          [
            <Icon onClick={() => this.props.acceptMatch(this.props.key)} type="like-o" />, 
            <Icon onClick={() => this.props.rejectMatch(this.props.key)}   type="dislike-o" />
          ]
        }
        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
        <InfoMatch 
          match={this.props.item}
          id={(this.props.item.user1 === localStorage.getItem('user' )? this.props.item.user1 : this.props.item.user2 )}
          />

        {this.props.content}
      </List.Item>
    );
  }
}

export default withRouter(potentialMatch);