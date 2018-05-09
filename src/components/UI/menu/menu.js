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
        <Menu.Item key="/matches/matched">
          <NavLink to="/matches/matched" >Matched</NavLink>
        </Menu.Item>
        <Menu.Item key="/matches/tobe">
          <NavLink to="/matches/tobe" >To Be Matched</NavLink>
        </Menu.Item>
        <Menu.Item key="/matches/chat">
          <NavLink to="/matches/chat" >Chats</NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="/signin">
        <NavLink to="/signin" >Login</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(menu);