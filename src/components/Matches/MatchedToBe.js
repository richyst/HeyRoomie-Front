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

  }


  componentDidMount(){
    console.log(listData);
    AxiosInst.get('/match').then(
      res => {
        console.log(res)
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
  render() {
    return (
      <div style={{overflowY: 'scroll', maxHeight: '80vh'}} >
        <h4>Eres compatible con estos usuarios...</h4>
        <hr/>
        <List
          itemLayout="vertical"
          dataSource={listData}
          footer={<div><b>ant design</b> footer part</div>}
          renderItem={item => (
            <PotentialMatch 
              acceptMatch={this.acceptMatch}
              rejectMatch={this.rejectMatch}
              avatar={item.avatar}
              id={item.id}
              title={item.title}
              description={item.description}
              href={item.href}
              key={item.title}
              content={item.content}
              />
          )}/>
      </div>
    );
  }
}
export default MatchesToBe;