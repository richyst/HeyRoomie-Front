import React from 'react';
import AxiosInst from '../../axios';
import PotentialMatch from './potentialMatch';
import {List } from 'antd';

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
  render() {
    return (
      <div style={{overflowY: 'scroll', maxHeight: '80vh'}} >
        <h4>Eres compatible con estos usuarios...</h4>
        <hr/>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          footer={<div><b>ant design</b> footer part</div>}
          renderItem={item => (
            <PotentialMatch 
              avatar={item.avatar}
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