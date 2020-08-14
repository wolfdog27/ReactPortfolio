import React from 'react'
import { Layout} from 'antd';
import './Portfolio.css'
import CardComp from "../components/Card"

const { Content} = Layout;


export default function Portfolio() {
  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <CardComp/>
        </div>
      </Content>
  </Layout>
  )
}
