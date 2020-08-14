import React from 'react'
import { Layout } from 'antd';
import './Portfolio.css'
import { Card } from 'antd';

const { Meta } = Card;

const { Content } = Layout;


export default function About() {
  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div className="headshot">
            <Card
              style={{ width: 240 }}
              cover={<img alt="Kyle Nicholas Anderson" src="https://wolfdog27.github.io/KNA-Portfolio/assets/kyle.jpg" />}
            >
            </Card>
            <Card title="Welcome" style={{ width: 652 }}>
              <p>Full-Stack web developer with a background in the arts - imagining the impossible, executing high-caliber material on a deadline, synergistically problem solving with a group of strangers project after project. Recent graduate from the University of Washington with a certificate in Full-Stack development, focusing on mobile first technologies. Exceedingly malleable and a quick study to learn your desired languages and programs. Combining artistic experiences with newly developed coding skills, I am ready to create and collaborate with your team.</p>
              <p>KyleNicholasAnderson@gmail.com</p>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
