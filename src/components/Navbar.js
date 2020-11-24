import React,{useState} from 'react'

//import styling
import '../css/component-level/Navbar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";

//router components
import { NavLink } from 'react-router-dom';

//sidbar data
import {SideBarData} from './SideBarData';


export default function Navbar() {

    const [open, setOpen] = useState(false);

    const rendered_bar = SideBarData.map((item,index) => {
        return <li key={index} className={item.className}>
            <NavLink to={item.link}>
                {item.icon}
                    <span>{item.label}</span>
            </NavLink>
        </li>
    })

    console.log(open);

    return (
      <>
        <div className="navbar-cont">
          <div to="#" className="hamburger-menu">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => setOpen(!open)}
            />
          </div>



        </div>

        <nav className={open ? "sidebar-cont active" : "sidebar-cont"}>
          <div to="#" className="hamburger-menu close">
            <FontAwesomeIcon
              icon={faTimes}
              size="1x"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="nav-menu-items">{rendered_bar}</ul>
        </nav>
      </>
    );
}
