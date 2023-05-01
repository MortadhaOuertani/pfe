import React, { useEffect, useState } from 'react'
import { Alert, AlertErr, H1Succ, NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, Notif, RightSide } from './AdminDashboardElements'
import Sidebar3 from './Sidebar/Sidebar3'
import { FcPlus, FcFullTrash } from 'react-icons/fc';
import axios from 'axios'
import './AdminSettings.css'

const AdminSettings = () => {
    const [show, setshow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [Error, setError] = useState(false);
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
    function handleDeleteClick(item) {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            setError(true);
            setTimeout(() => setshow(true), 200);
            setTimeout(() => setshow(false), 2000);
            setTimeout(() => setError(false), 3000);
            AdminSettingsRemove(item);
        }
    }
    function handleAcceptClick(item) {
        const confirmAccept = window.confirm("Are you sure you want to accept this item?");
        if (confirmAccept) {
            setSuccess(true);
            setTimeout(() => setshow(true), 200);
            setTimeout(() => setshow(false), 2000);
            setTimeout(() => setSuccess(false), 3000);
            onAddOffer(item);
        }
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
            {success && (
                <Alert success={success} show={show}>
                    <H1Succ>Offer posted successfully</H1Succ>
                </Alert>
            )}
            {Error && (
                <AlertErr Error={Error} show={show}>
                    <H1Succ>Offer deleted successfully</H1Succ>
                </AlertErr>
            )}
            <NavbarDiv />
            <Container>

                <Sidebar3 />
                <RightSide>
                    {Array.isArray(adminModel.acceptList) && adminModel.acceptList.length === 0 ? (
                        <p></p>
                    ) : (
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
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dateExpiration}</td>
                                        <td className='icons-container'>
                                            <FcPlus
                                                className="text-success"
                                                style={{ marginLeft: '30px', height: '20px', width: '20px' }}
                                                onClick={() => { handleAcceptClick(item) }}
                                            />
                                            <FcFullTrash
                                                className="text-danger"
                                                onClick={() => { handleDeleteClick(item) }}
                                                style={{ marginLeft: '80px', height: '20px', width: '20px' }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                </ RightSide >
            </Container >
        </>
    )
}

export default AdminSettings
