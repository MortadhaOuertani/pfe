import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, LeftSide, RightSide } from './AdminElements'
import Sidebar from './Sidebar'
const Admin = () => {


    return (
        <>
            <NavbarDiv />
            <Container>
                <Sidebar />
            </Container>
        </>
    )
}

export default Admin
