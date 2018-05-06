import React from 'react';
import { Layout } from 'antd';
import Menu from '../menu/menu';

const { Sider } = Layout;

const sidebar = (props) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      onCollapse={props.onCollapse}
    >
      <div className="logo" >
      </div>
      <Menu />
    </Sider>
  );
}
export default sidebar;