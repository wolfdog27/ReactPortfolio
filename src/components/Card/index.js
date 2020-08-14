import React from 'react'
import { Card, Avatar } from 'antd';
import { GithubOutlined, EllipsisOutlined, DesktopOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function CardComp() {
    const myInfoArray = [
        { 
            name: "Wine Key",
            web: "http://fv-winekey.herokuapp.com/",
            img: "https://www.fireandvinehospitality.com/wp-content/uploads/FV0Logo-newsbox.jpg",
            git: "https://github.com/wolfdog27/Wine-Key",
            description: "Wine Key is an interactive inventory tool to add, modify, read, and delete items in a restaurant's wine inventory, as well as search for bottles that they need that may exist elsewhere within the company. "

       },
       { 
        name: "Budget Tracker",
        web: "https://kna-budget-tracker.herokuapp.com/",
        img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        git: "https://github.com/wolfdog27/BudgetTracker",
        description: "Budget Tracker is a PWA application to track funds both online and offline, using IndexedDB.  This application is perfect for EVERYONE, especially those who need a visual to keep them in check =)"
        },
        { 
        name: "Mood Indigo",
        web: "https://github.com/wolfdog27/moodIndigo",
        img: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        git: "https://github.com/wolfdog27/Wine-Key",
        description: "Mood Indigo connects the users emotions with suggestable playlist through Spotify based on the users local weather. The application utilizes Spotify, geo-location, and Open Weather API to pull user info."

       },
       
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
            <GithubOutlined key="GitHub" onClick={()=> {window.location.href = myInfoArray.git}} />,
        ]}
    >
        <Meta
            title={myInfoArray.name}
            description={myInfoArray.description}
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
