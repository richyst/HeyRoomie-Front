import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

const menu = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <SubMenu
        key="sub1"
        title={<span><Icon type="profile" /><span>Perfil</span></span>}
      >
        <Menu.Item key="1">Editar</Menu.Item>
        <Menu.Item key="2">Ver tu Perfil</Menu.Item>
        <Menu.Item key="3">Alex</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={<span><Icon type="team" /><span>Matches</span></span>}
      >
        <Menu.Item key="4">Ver</Menu.Item>
        <Menu.Item key="5">Buscar</Menu.Item>
        <Menu.Item key="6">Chats</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default menu;