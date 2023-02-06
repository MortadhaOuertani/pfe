import React from 'react'
import Offer from './offer/offer'
import { Container, Header, Number, Offers, OffersCount, SearchJob, SearchPlace } from './offerspageElements'

const OffersPage = () => {
  return (
    <>
    <Container>
    <Header>
      <SearchJob/>
      <SearchPlace />
    </Header>
    <OffersCount>
      <Number>0</Number>
    </OffersCount>
    <Offers>
      <Offer></Offer>
    </Offers>
    </Container>
    </>
    
  )
}

export default OffersPage