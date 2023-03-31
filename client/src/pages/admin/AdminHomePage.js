import React from 'react'
import { Notif } from './AdminDashboardElements'
import { Container, Welcome } from './AdminHomeElements'
import { MdNotifications } from "react-icons/md"


const AdminHomePage = () => {
    return (
        <>
            <Container>
                <Welcome>Welcome Admin !</Welcome>
            </Container>
        </>
    )
}

export default AdminHomePage
