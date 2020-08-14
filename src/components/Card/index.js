import React from 'react'
import { Card, Avatar } from 'antd';
import { GithubOutlined, EllipsisOutlined, DesktopOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function CardComp() {
    const myInfoArray = [
        { 
            name: 'project1',
            web: "siteaddress",
            img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"

       },
       { 
        name: 'project',
        web: "http://fv-winekey.herokuapp.com/",
        img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        

   }
       
   ]
    return (
        
       myInfoArray.map((myInfoArray)=>(
        <Card
        // key={i}
        style={{ width: 300 }}
        cover={
            <img
                alt="WineKey"
                src={myInfoArray.img}
            />
        }
        actions={[
            <DesktopOutlined key="Web" onClick={()=> {window.location.href = myInfoArray.web}} />,
            <GithubOutlined key="GitHub" onClick={()=> {window.open('https://github.com/wolfdog27/Wine-Key')}}/>,
        ]}
    >
        <Meta
            title={myInfoArray.name}
            description="Talk about what we did in this app"
        />
    </Card>
       ))
       

    )
}

// export default function CardComp(props) {
//     return (

//         <Card
//             style={{ width: 300 }}
//             cover={
//                 <img
//                     alt={props.alt}
//                     src={props.src}
//                 />
//             }
//             actions={[
//                 <DesktopOutlined key="Web" onClick={()=> {window.open({props.web})}} />,
//                 <GithubOutlined key="GitHub" onClick={()=> {window.open({props.git})}}/>,
//             ]}
//         >
//             <Meta
//                 title={props.title}
//                 description={props.discription}
//             />
//         </Card>

//     )
// }

{/* <CardComp  alt={"alt text here"} src={"link of pic"} /> */}

// export default function AnimalCardComp(props) {
//     return (

//         <div className="animalCard">
//             <img src={props.imageSrc}/>
//             <h1 align="center">{props.name}</h1>
//             <div className="pupCardOptions">
//                 <h1>yes</h1>
//                 <h1>no</h1>
//             </div>
//             <h1 align="center">Info</h1>
//         </div>
//     )
// }
