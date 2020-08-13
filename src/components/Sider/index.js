import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Sider } = Layout;

export default class SiderComp extends Component {
    render() {
        return (
            <div>
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
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
        </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
        </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
        </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
        </Menu.Item>
          </Menu>
        </Sider>
            </div>
        )
    }
}