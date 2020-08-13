import React, { Component } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

export default class Body extends Component {
    render() {
        return (
            <div>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    content
                    </div>
                </Content>
            </div>
        )
    }
}
