import React, { Component } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

export default class BodyComp extends Component {
    render() {
        return (

                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    This is where all my work will go
                    </div>
                </Content>

        )
    }
}
