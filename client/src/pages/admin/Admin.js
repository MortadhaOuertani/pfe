import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, LeftSide, RightSide } from './AdminElements'
import AdminHomePage from './AdminHomePage'
import Sidebar from './Sidebar/Sidebar'

const Admin = () => {


    return (
        <>
            <NavbarDiv />
            <Container>
                <Sidebar />
                <AdminHomePage />
            </Container>
        </>
    )
}

export default Admin
