import styled from "@emotion/styled";
import { MultiLevelMenu } from "./sidebar/sidebar.component";

export const SideBar = () => {
    const Wrapper = styled.aside`
        background: transparent;
        width: 200px;
    `;
    const menus = [
        {
        label: "personal-info",
        icon: "./img/down1.png",
        path: '#',
        submenu: [
        {
            label: "about-me",
        //   icon: "./img/down2.png",
            icon2: "./img/folder2.png",
            path: '/about-me',
            component: "bio",
            exact: true,
            submenu: [
            //   {
            //     label: "Boom 1"
            //   },
            //   {
            //     label: "Boom 2"
            //   }
            ]
        },    
        {
            label: "education",
        //   icon: "./img/down2.png",
            icon2: "./img/folder3.png",
            path: '/education',
            exact: true,
        //   submenu: [
        //     {
        //       label: "Boom 1",
        //       icon: "./img/edu.png",
        //       path: '#',
        //     },
            
        //   ]
        },  
        ]
        },
        {
        label: "contacts",
        icon: "./img/down1.png",
        path: '#',
        submenu: [
            {
            mail: "dntrh0425@gmail.com",
            icon: "./img/mail-icon.png"
            },
            {
            phone: "0949844291",
            icon: "./img/phone-icon.png"
            }
        ]
        },  
    ];
   
    return (
        <div>
            <Wrapper>
                <MultiLevelMenu menus={menus}/>
            </Wrapper>
        </div>
    )
}