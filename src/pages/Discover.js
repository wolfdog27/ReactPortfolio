import React from "react";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


function Discover() {
    return (

<Layout>
    
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          <h1 class="pupsterTitle">Pawsitivity</h1>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Can we put cards here?
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
}

export default Discover;