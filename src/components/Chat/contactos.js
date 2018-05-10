import React from 'react';
import { List, Icon } from 'antd';

import Contacto from './contacto';
const data = [{
    title: 'Usuario 1',
  },
  {
    title: 'Usuario 2',
  },
  {
    title: 'Usuario 3',
  },
  {
    title: 'Usuario 4',
  },
  {
    title: 'Usuario 5',
  },
  {
    title: 'Usuario 6',
  },
  {
    title: 'Usuario 7',
  },
  {
    title: 'Usuario 8',
  },
  {
    title: 'Usuario 9',
  },
  {
    title: 'Usuario 19',
  },
  {
    title: 'Usuario 11',
  },
  {
    title: 'Usuario 12',
  },
  {
    title: 'Usuario 13',
  },
  {
    title: 'Usuario 14',
  },
  {
    title: 'Usuario 15',
  },
  {
    title: 'Usuario 16',
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