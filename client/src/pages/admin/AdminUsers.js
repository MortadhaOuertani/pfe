import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, Notif } from './AdminDashboardElements'
import Sidebar2 from './Sidebar/Sidebar2'
import { Div } from './AdminUsersElements';
import './AdminSettings.css'
import axios from 'axios';


const AdminUsers = () => {
  const [Companies, setCompanies] = useState();
  const [Candidates, setCandidates] = useState();


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
    getCandidates();
  }, [])

  useEffect(() => {
    getCompanies();
  }, [])

  return (
    <>
      <NavbarDiv />
      <Container>
        <Sidebar2 />
        <Div>
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
