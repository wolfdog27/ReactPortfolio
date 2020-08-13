import React, { Component } from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

export default class FooterComp extends Component {
    render() {
        return (
            <div>
                 <Footer style={{ textAlign: 'center' }}>Ant Design © 2020 Created by KNA</Footer>
            </div>
        )
    }
}
