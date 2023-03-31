import React, { useState } from 'react';
import { Div, SidebarContainer, SidebarHeader, SidebarLink } from './SidebarElements';
import { AiOutlineHome } from "react-icons/ai";
import { MdAccountBox, MdSettings } from "react-icons/md";
import { FcReadingEbook } from "react-icons/fc";


const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = link => {
        setActiveLink(link);
    };
    
    
    return (
        <SidebarContainer>
            <Div>
            <SidebarHeader>Admin Dashboard</SidebarHeader>
            < FcReadingEbook style={{width: '60px' , height: '60px' , alignSelf: 'center'}}/>
            </Div>
            <div><SidebarLink to='/admin/dashboard' active={activeLink === 'dashboard'} onClick={() => handleLinkClick('dashboard')}><AiOutlineHome style={{ marginRight: "10px" }} />
                Dashboard
            </SidebarLink></div>
            <div><SidebarLink to='/admin/users' active={activeLink === 'users'} onClick={() => handleLinkClick('users')}><MdAccountBox style={{ marginRight: "10px" }} />
                Users
            </SidebarLink></div>
            <div><SidebarLink to='/admin/settings' active={activeLink === 'settings'} onClick={() => handleLinkClick('settings')}><MdSettings style={{ marginRight: "10px" }} />
                Settings
            </SidebarLink></div>
        </SidebarContainer>
    );
};

export default Sidebar;