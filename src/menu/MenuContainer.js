import React from 'react';
import AppConfig from '../reducer/AppConfig';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const MenuContainer = () => {
    const [configStates,dispatch] = AppConfig();


    const menuItemArray = configStates.config.map((item,index)=> {
        return <MenuItem 
                key={`item_${index}`}
                icon={item.icon}>
                    {item.type}
                    <Link to={`/florian/${item.url}`} />
                </MenuItem>
    })
    return (     
        <ProSidebar collapsed={configStates.collapsedMenu}>
        <SidebarHeader>
            {configStates.collapsedMenu && <FaAngleRight className="collapse-icon" onClick={()=>dispatch({type : "setMenuCollapse"})}/> }
            {!configStates.collapsedMenu && <FaAngleLeft 
            className="collapse-icon" onClick={()=>dispatch({type : "setMenuCollapse"})}/> }
            <h1 className={`header-title ${configStates.collapsedMenu? "collapse" : ""}`}>Breaking Bad</h1>
        </SidebarHeader>
        <SidebarContent>
            <Menu>
                <MenuItem key="item_0" icon={<FaAngleUp />}>
                    Root
                    <Link to="/florian" />
                </MenuItem>
                {menuItemArray}
            </Menu>
        </SidebarContent>
        </ProSidebar>
            )
}

export default MenuContainer
