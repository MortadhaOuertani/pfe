import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../postingoffers/postElements'
import { Body, Header } from './CompanyHomePageElements'

const CompanyHomePage = () => {
 const dispatch = useDispatch()
 const navigate  = useNavigate()
 

  return (
    <>
    <Container>
    <Header><input placeholder='Search'></input></Header>
    <Body></Body>
    </Container>
    </>
  )
}

export default CompanyHomePage