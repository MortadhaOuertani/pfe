import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import OfferContainer from '../../components/offerContainer/OfferContainer'
import { GetOffers } from '../../redux/actions/offerActions'
import Offer from './offer/offer'
import { Container, Header, Number, Offers, OffersCount, SearchJob, SearchPlace } from './offerspageElements'



const OffersPage = () => {
  const dispatch = useDispatch()
  const offers = useSelector(state=>state.offers)


  useEffect(() => {
    dispatch(GetOffers())
},[])

  return (
    <>
      <Container>
        <Header>
          <SearchJob />
          <SearchPlace />
        </Header>
        <OffersCount>
          <Number>0</Number>
        </OffersCount>  
        <Offers>
        { offers.OFFERSS.map(({_id,experience}) =>(
          <Offer _id={_id} experience={experience}/>
      ))} 
        </Offers>
      </Container>
    </>

  )
}

export default OffersPage