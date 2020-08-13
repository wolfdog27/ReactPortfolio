import React, { Component } from 'react'
import { Layout } from 'antd';
import "./style.css";

const { Header } = Layout;

export default class HeaderComp extends Component {
    render() {
        return (

                   <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                       <h1 class="h1Head">Pupster</h1>
                   </Header>

        )
    }
}
