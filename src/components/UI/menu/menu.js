import React from 'react';
import { Menu, Icon } from 'antd';
import {NavLink, withRouter} from 'react-router-dom';
const SubMenu = Menu.SubMenu;

const menu = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <SubMenu
        key="sub1"
        title={<span><Icon type="profile" /><span>Perfil</span></span>}
      >
        <Menu.Item key="1">
          <NavLink to="/perfil/cuestionario" >Editar Perfil</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/perfil" >Ver Perfil</NavLink>
        </Menu.Item>
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

export default withRouter(menu);