import React, { useState } from 'react';
import { SidebarContainer, SidebarHeader, SidebarLink } from './SidebarElements';
import { AiOutlineHome } from "react-icons/ai";
import { MdAccountBox, MdSettings } from "react-icons/md";


const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('dashboard');

    const handleLinkClick = link => {
        setActiveLink(link);
    };

    return (
        <SidebarContainer>
            <SidebarHeader>Admin Dashboard</SidebarHeader>
            <div><SidebarLink active={activeLink === 'dashboard'} onClick={() => handleLinkClick('dashboard')}><AiOutlineHome style={{ marginRight: "10px" }} />
                Dashboard
            </SidebarLink></div>
            <div><SidebarLink active={activeLink === 'users'} onClick={() => handleLinkClick('users')}><MdAccountBox style={{ marginRight: "10px" }} />
                Users
            </SidebarLink></div>
            <div><SidebarLink active={activeLink === 'settings'} onClick={() => handleLinkClick('settings')}><MdSettings style={{ marginRight: "10px" }} />
                Settings
            </SidebarLink></div>
        </SidebarContainer>
    );
};

export default Sidebar;