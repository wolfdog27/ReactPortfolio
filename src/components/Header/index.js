import React from 'react'
import { PageHeader, Button, } from 'antd';


export default function HeaderComp() {
    return (
    
        <PageHeader
      className="site-page-header-responsive"
      title="Kyle Nicholas Anderson"
      subTitle
      extra={[
        <Button onClick={()=> {window.location.href = "/About"}} key="3">About</Button>,
        <Button onClick={()=> {window.location.href = "/Portfolio"}} key="2">Portfolio</Button>,
      ]}
      />
      
    )
}
