import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import Navbar from './Navbar';

const Nnavbar = ({ user }) => {
  const location = useLocation();

  const isHome = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/formCandidate' || location.pathname === '/formCompany';

  return (
    <>
      <HomeNavbar user={user} />

    </>

  )
}

export default Nnavbar