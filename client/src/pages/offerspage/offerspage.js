import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetOffers } from '../../redux/actions/offerActions'
import Offer from './offer/offer'
import { Container, Header, Number, Offers, OffersCount, SearchJob, SearchPlace } from './offerspageElements'



const OffersPage = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const offers = useSelector(state => state.offers)
  const [newoffer, setnewoffer] = useState([]);

  const search = () => {
    offers.OFFERSS.map(({ search, _id, }) => { //nekteb mtaa l offre lkol
      if (search.includes(query)) {
        newoffer.push(offers.OFFERSS[0])
      }
    }
    )
    offers.OFFERSS.splice(0, offers.OFFERSS.length, ...newoffer)
    console.log(offers.OFFERSS)
  }

  useEffect(() => {
    dispatch(GetOffers())
    console.log(newoffer)
  }, [offers.OFFERSS])

  return (
    <>

      <Container>
        <Header>
          <SearchJob placeholder='searchjob' type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
          <button onClick={search}>Search</button>
          <SearchPlace placeholder='searchplace' />
        </Header>
        <OffersCount>
          <Number>0</Number>
        </OffersCount>
        <Offers>
          {offers.OFFERSS.map(({ _id, company, nbrRecrute, contract, salary, study, language, experience, title, descripion, }) => (
            <Offer _id={_id} company={company} experience={experience} />
          ))}
        </Offers>
      </Container>
    </>

  )
}

export default OffersPage