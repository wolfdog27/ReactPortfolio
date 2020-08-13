import React from "react";
import { Layout, Menu } from 'antd';
import Body from '../components/Body'
import SiderComp from '../components/Sider'
import Footer from '../components/Footer'
import Header from '../components/Header'


function About() {
  return (
    <div>
      <Layout>
        <SiderComp/>
        <Layout>
          <Header />
          <Body />
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}

export default About;
