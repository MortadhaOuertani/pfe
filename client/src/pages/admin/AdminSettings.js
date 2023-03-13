import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, Notif } from './AdminDashboardElements'
import Sidebar3 from './Sidebar/Sidebar3'
import { MdNotifications } from "react-icons/md"
import { FcPlus, FcFullTrash } from 'react-icons/fc';
import axios from 'axios'
import './AdminSettings.css'

const AdminSettings = () => {
    const [adminModel, setAdminModel] = useState({ acceptList: [] });
    const [updateFlag, setUpdateFlag] = useState(false); // state variable to trigger re-render

    const AdminSettingsRemove = (item) => {
        axios.post("http://localhost:3600/api/offersdelete", item)
            .then(
                (res) => {
                    console.log(res.data)
                    setUpdateFlag(!updateFlag); // set the update flag to trigger re-render
                }
            )
            .catch(console.log("error"))
    }

    const onAddOffer = (item) => {
        axios.post("http://localhost:3600/api/offers", item)
            .then((res) => {
                console.log(res.data)
                setUpdateFlag(!updateFlag); // set the update flag to trigger re-render
            })
            .catch(console.log("error"))
    }

    const getAdmin = () => {
        axios.get("http://localhost:3600/api/getAdmin")
            .then((res) => {
                setAdminModel(res.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAdmin();
    }, [updateFlag]); // re-run only when updateFlag changes
    
    return (
        <>
            <NavbarDiv />
            <Container>
                <Notif><MdNotifications style={{ height: '30px', width: '30px' }} /></Notif>
                <Sidebar3 />

                <table className="content-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {adminModel.acceptList.map((item, index) => (
                            <tr key={item.title}>
                                <td>{index + 1}</td>  {/* auto increment  */}
                                <td>{item.title}</td>
                                <td>{item.name}</td>
                                <td>{item.dateExpiration}</td>

                                <td className='icons-container'>
                                    <FcPlus
                                        className="text-success" style={{ marginLeft: '30px', height: '20px', width: '20px' }}
                                        onClick={() => { onAddOffer(item) }}
                                    />
                                    <FcFullTrash
                                        className="text-danger" onClick={()=>{AdminSettingsRemove(item)}} style={{ marginLeft: '80px', height: '20px', width: '20px' }}
                                    //  onClick={() => onDeleteOffer(offer)}
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default AdminSettings
