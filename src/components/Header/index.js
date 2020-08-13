import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header } = Layout;

export default class HeaderComp extends Component {
    render() {
        return (
            <div>
                   <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
            </div>
        )
    }
}
