import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, Notif } from './AdminDashboardElements'
import Sidebar2 from './Sidebar/Sidebar2'
import { Div } from './AdminUsersElements';
import { MdNotifications } from 'react-icons/md';
import './AdminSettings.css'
import axios from 'axios';


const AdminUsers = () => {
  const [Offers, setOffers] = useState();
  const [Companies, setCompanies] = useState();
  const [Candidates, setCandidates] = useState();

  const getOffers = () => {
    axios.get("http://localhost:3600/api/offers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch(console.log("error"))
  }

  const getCandidates = () => {
    axios.get("http://localhost:3600/api/getCandidates")
      .then((res) => {
        setCandidates(res.data);
      })
      .catch(console.log("error"))
  }

  const getCompanies = () => {
    axios.get("http://localhost:3600/api/getcompanies")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch(console.log("error"))
  }

  useEffect(() => {
    getOffers();
  }, [])

  useEffect(() => {
    getCandidates();
  }, [])

  useEffect(() => {
    getCompanies();
  }, [])

  return (
    <>
      <NavbarDiv />
      <Container>
        <Notif><MdNotifications style={{ height: '30px', width: '30px' }} /></Notif>
        <Sidebar2 />
        <Div>
          {Offers && (
            <table className="content-table">
              <caption>Offers table :</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Offers.map((item, index) => (
                  <tr key={item.index}>
                    <td>{index + 1}</td>  {/* auto increment  */}
                    <td>{item.title}</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                ))}
              </tbody>
            </table>)}
          {Candidates && (
            <table className="content-table">
              <caption>Candidates table :</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {Candidates.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td> 
                    <td>{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {Companies && (
            <table className="content-table">
              <caption>Companies table :</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Name</th>
                  <th>Adress</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {Companies.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Div>

      </Container>
    </>
  )
}

export default AdminUsers
