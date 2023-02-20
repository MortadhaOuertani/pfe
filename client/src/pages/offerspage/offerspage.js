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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [count, setCount] = useState(0);
  
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredOffers(offers.OFFERSS);
    } else {
      const filtered = offers.OFFERSS.filter(
        (offer) =>
          offer.search &&
          Array.isArray(offer.search) &&
          offer.search.some((search) =>
            search.toLowerCase().includes(value)
          )
      );
      setFilteredOffers(filtered);
    }
  };
  
  useEffect(() => {
    dispatch(GetOffers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredOffers(offers.OFFERSS || []);
  }, [offers]);

  useEffect(() => {
    setCount(filteredOffers.length);
  }, [filteredOffers]);

  return (
    <>
      <Container>
        <Header>
          <SearchJob placeholder='searchjob' type="text" value={searchTerm} onChange={handleSearch} />
          <SearchPlace placeholder='searchplace' />
        </Header>
        <OffersCount>
          <h1>Number of Offers</h1>
          <Number>{count}</Number>
        </OffersCount>
        <Offers>
          {filteredOffers.map((offer) => (
            <Offer key={offer._id} _id={offer._id} company={offer.company} experience={offer.experience} />
          ))}
        </Offers>
      </Container>
    </>
  )
}

export default OffersPage