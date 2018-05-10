import React from 'react';
import AxiosInst from '../../axios';
import PotentialMatch from './potentialMatch';
import {List } from 'antd';

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `Ricardo Salcedo ${i}`,
      id: i,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'bla bla bla bla bla test teste test',
      content: 'Otro renglón para opciones del usuario',
    });
  }
class MatchesToBe extends React.Component {
  state = {
    matches: []
  }


  componentDidMount(){
    console.log(listData);
    let body = {
      uuid: '3cd93ef9-245b-4a86-838a-b61b6b1ff63e'
    }
    AxiosInst.post('/matches', body).then(
      res => {
        this.setState({...this.state, matches: res.data.payload})
        console.log(this.state);
      }
    ).catch(
      error => {
        console.log(error);
      }
    )
  }

  acceptMatch = (id) => {
    console.log('Match ' + id + ' Aceptado')
  } 
  rejectMatch = (id) => {
    console.log('Match ' + id + ' Rechazado')
  }
  render = () => {
    const matches = Object.values(this.state.matches);
    return (
      <div style={{overflowY: 'scroll', maxHeight: '80vh'}} >
        <h4>Eres compatible con estos usuarios...</h4>
        <hr/>
        <List
          itemLayout="vertical"
          dataSource={matches}
          renderItem={item => (
            <PotentialMatch 
              acceptMatch={this.acceptMatch}
              rejectMatch={this.rejectMatch}
              item={item}
              key={item.uuid}
              />
          )}/>
      </div>
    );
  }
}
export default MatchesToBe;