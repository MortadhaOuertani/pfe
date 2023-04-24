import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';

const Nnavbar = ({ user }) => {
  const location = useLocation();

  return (
    <>
      <HomeNavbar user={user} />

    </>

  )
}

export default Nnavbar