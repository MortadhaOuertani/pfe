import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
    import { GetOffers } from '../../redux/actions/offerActions'
import Offer from './offer/offer'
import { Container, Header, Number, Offers, OffersCount, SearchJob, SearchPlace } from './offerspageElements'



const OffersPage = () => {
  const dispatch = useDispatch()
  const offers = useSelector(state => state.offers)


  useEffect(() => {
    dispatch(GetOffers())
  }, [])

  

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
          {offers.OFFERSS.map(({ _id,company,nbrRecrute,contract,salary,study,language,experience,title,descripion,}) => (
            <Offer _id={_id} company={company} experience={experience} />
          ))}
        </Offers>
      </Container>
    </>

  )
}

export default OffersPage