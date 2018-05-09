import React from 'react';
import { List, Icon } from 'antd';

import Contacto from './contacto';
const data = [{
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
  {
    title: 'Ant Design Title 9',
  },
  {
    title: 'Ant Design Title 19',
  },
  {
    title: 'Ant Design Title 11',
  },
  {
    title: 'Ant Design Title 12',
  },
  {
    title: 'Ant Design Title 13',
  },
  {
    title: 'Ant Design Title 14',
  },
  {
    title: 'Ant Design Title 15',
  },
  {
    title: 'Ant Design Title 16',
  },

];

const contactos = (props) => {

  return (
    <div style={{maxHeight:'80vh', overflowY:'scroll', borderRight:'1px solid #eee'}}>
      <Icon type="user"  style={{fontSize: '2em', marginLeft: '45%', width:'20px'}} />
      <hr/>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <Contacto
              key={item.title}
              title={item.title}
              />
          )}
        />
    </div>

  );

}
export default contactos;