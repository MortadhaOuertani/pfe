import React from 'react'
import { Notif } from './AdminDashboardElements'
import { Container, Welcome } from './AdminHomeElements'
import { MdNotifications } from "react-icons/md"


const AdminHomePage = () => {
    return (
        <>
            <Container>
                <Notif><MdNotifications style={{ height: '30px', width: '30px' }} /></Notif>
                <Welcome>Welcome Admin !</Welcome>
            </Container>
        </>
    )
}

export default AdminHomePage
