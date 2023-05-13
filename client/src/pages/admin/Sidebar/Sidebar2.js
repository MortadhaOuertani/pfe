import React, { useState } from 'react';
import { SidebarContainer, SidebarHeader, SidebarLink } from './SidebarElements';
import { AiOutlineHome } from "react-icons/ai";
import { MdAccountBox, MdSettings } from "react-icons/md";
import { FcReadingEbook } from 'react-icons/fc';


const Sidebar2= () => {
    const [activeLink, setActiveLink] = useState('users');

    const handleLinkClick = link => {
        setActiveLink(link);
    };
    

    return (
        <SidebarContainer>
            <SidebarHeader>Admin Dashboard</SidebarHeader>
            < FcReadingEbook style={{ width: '100px', height: '100px', alignSelf: 'center' }} />
            <div><SidebarLink to='/admin/dashboard' active={activeLink === 'dashboard'} onClick={() => handleLinkClick('dashboard')}><AiOutlineHome style={{ marginRight: "10px" }} />
            Statistics
            </SidebarLink></div>
            <div><SidebarLink to='/admin/users' active={activeLink === 'users'} onClick={() => handleLinkClick('users')}><MdAccountBox style={{ marginRight: "10px" }} />
                Users
            </SidebarLink></div>
            <div><SidebarLink to='/admin/settings' active={activeLink === 'settings'} onClick={() => handleLinkClick('settings')}><MdSettings style={{ marginRight: "10px" }} />
                Offers resquests
            </SidebarLink></div>
        </SidebarContainer>
    );
};

export default Sidebar2;