import React from 'react';
import Axios from '../../axios';
import {
  List,
  Avatar
} from 'antd';
import {Link, withRouter} from 'react-router-dom';

class infoMatch extends React.Component {
  state = {
    info: {}
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    Axios.get('/user/'+ this.props.id).then(
      res => {
        this.setState({...this.state, info: res.data.payload})
        
      
      }
    ).catch(
      error => {
        console.log(error);
      }
    )

  }
  render = () => {
      return (
        <List.Item.Meta
          avatar={<Avatar src={this.props.id} />}
          title={ <span style={{fontSize: '1.5em'}}><Link to={'/perfil/' + this.props.id}>{this.state.info.name}</Link></span>}
          description={(this.state.info.ocupation ? 'Estudia' : 'Trabaja') +' - '+ (this.state.info.birthdate) +' - '+ (this.state.info.gender ? 'Hombre' : 'Mujer') }
          />
    );
  }

}
export default withRouter(infoMatch);