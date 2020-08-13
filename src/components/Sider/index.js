import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, FolderOpenOutlined, LaptopOutlined, MailOutlined } from '@ant-design/icons';
import "./style.css";
const { Sider } = Layout;

export default class SiderComp extends Component {
  render() {
    return (
    
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu class="sideBar" theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
        </Menu.Item>
          <Menu.Item key="2" icon={<FolderOpenOutlined />}>
            Portfolio
        </Menu.Item>
          <Menu.Item key="3" icon={<LaptopOutlined />}>
            About
        </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            Contact
        </Menu.Item>
        </Menu>
      </Sider>

    )
  }
}
