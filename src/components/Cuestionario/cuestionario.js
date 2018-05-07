import React from 'react';
import {Tabs} from 'antd';
import {withRouter} from 'react-router-dom';

import Casa from './casa';
import Preferencias from './preferencias';
import YoSoy from './soy';

const TabPane = Tabs.TabPane;

const cuestionario = () => {

  return (
    <Tabs defaultActiveKey="1" >
      <TabPane tab="¿Cómo Soy?" key="1"><YoSoy/></TabPane>
      <TabPane tab="¿Qué Busco?" key="2"><Preferencias/></TabPane>
      <TabPane tab="¿Tengo Donde??" key="3"><Casa/></TabPane>
    </Tabs>
  );
}

export default withRouter(cuestionario);