import React, { useState } from "react";
import styled from "@emotion/styled";
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from "react-router-dom";
import { Main } from "../../main/main.component";


const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0; 
`;
const LI = styled.li``;
const Item = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 18px;
  ${'' /* @media (max-width: 1080px) {
    width: 100vw;
    background-color: #1E2D3D;
    color: #fff;
  } */}
  padding-left: ${props => `${props.dept * 18}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
  color: #607B96;
  margin-left: 5px;
  @media (max-width: 1080px) {
    color: #fff;
  }
`;
const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
    transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

export const MultiLevelMenu = ({menus}) => {
   const [activeMenus, setActiveMenus] = useState([]);
  
    const handleMenuClick = (data) => {
      console.log(data);
    };
  
    const handleArrowClick = (menuName) => {
      let newActiveMenus = [...activeMenus];
      if (newActiveMenus.includes(menuName)) {
        var index = newActiveMenus.indexOf(menuName);
        if (index > -1) {
          newActiveMenus.splice(index, 1);
        }
      } else {
        newActiveMenus.push(menuName);
      }

  
      setActiveMenus(newActiveMenus);
    };
  
    const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
        <LI>
        <Item dept={dept} onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}>
            {/* {hasSubMenu && (
             <Arrow/>
            )} */}
            <img src={data.icon}/>
            <img src={data.icon2}/>
            <NavLink to={`${data.path}`} className={({ isActive }) => isActive ? "active" : ""}>
              <Label 
                // className = {
                //   !activeMenus.includes(menuName) 
                //   ? '' : 'active'
                //   }
              >
              {data.label}  
              <a href="mailto:{data.mail}">{data.mail}</a> 
              <a href={"tel: + data.phone"}>{data.phone}</a> 
              </Label>
            </NavLink>
        </Item>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.submenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
        </LI>

    );
    const SubMenu = ({ dept, data, toggle, menuIndex }) => {
      if (!toggle) {
        return null;
      }
  
      dept = dept + 1;
  
      return (
        <UL>
          {data.map((menu, index) => {
            const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
  
            return (
              <ListMenu
                dept={dept}
                data={menu}
                hasSubMenu={menu.submenu}
                menuName={menuName}
                key={menuName}
                menuIndex={index}
              />
            );
          })}
        </UL>
      );
    };
  
    return (
      <UL>
        {menus.map((menu, index) => {
          const dept = 1;
          const menuName = `sidebar-menu-${dept}-${index}`;
  
          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
          );
        })}
      </UL>
    );
};
  
// export default MultiLevelMenu;