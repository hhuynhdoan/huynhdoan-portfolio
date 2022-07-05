import { useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from "react-router-dom";
import { About } from "../about/about.component";
import { Bio } from "../about/bio/bio.component";
import { Education } from "../about/education/education.component";
import { Interest } from "../about/interest/interest.component";
import { Contacts } from "../contacts/contacts.component";
import { Main } from "../main/main.component";
import { Project } from "../projects/projects.component";
import { Burger } from "./burger.component";
import './_header.scss'

export const Header = (props) => {

  const [activeMenu, setActiveMenu] = useState('false');

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  }
  return (
          
    <div>
      <div className="header-wrapper font-500 font-18">
          <div className="header">
              {/* <Router> */}

              <div className="header__left second-color">
                <Link to="/">
                  hhuynhdoan
                </Link>
                <div className={activeMenu ? "burger" : "burger active"} onClick={handleActiveMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={activeMenu ? "header__main second-color" : "header__main second-color active"} >
                <ul>
                  <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    _hello
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/about-me" className={({ isActive }) => isActive ? "active" : ""}>
                    _about-me
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
                    _project
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/contacts" className={({ isActive }) => isActive ? "active contact" : "contact"}>
                    _contact
                  </NavLink>
                  </li>
                  {/* {
                      props.menus.map( menu => 
                      <li> {menu.name} </li>
                      ) 
                  } */}
                </ul>
                  
              </div>
              <div className="header__right second-color">
                  <Link to="/contacts">
                  _contact-me
                  </Link>
              </div>
              {/* </Router> */}
          </div>
      </div>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about-me" element={<Bio/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        {/* <Route path="/bio" element={<Bio/>}/> */}
        {/* <Route path="/interest" element={<Interest/>}/> */}
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </div>
  )
}