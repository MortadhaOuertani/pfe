import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetOffers } from '../../redux/actions/offerActions'
import Offer from './offer/offer'
import { NavbarDiv } from './OfferDetailsElements'
import { Container, Header, Number, Offers, OffersCount, SearchJob, SearchPlace } from './offerspageElements'
import { FaMapMarkerAlt } from 'react-icons/fa';

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
          offer.search.some((search) =>    //some : return true or false 
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
    setCount(filteredOffers.length); //length is : the number of all the offers , filteredOffers is just a state 
  }, [filteredOffers]);

  return (
    <>

      <Container>
        <Header>
          <SearchJob placeholder='searchjob' type="text" value={searchTerm} onChange={handleSearch} style={{
            backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`)})`
          }}
          />
          <SearchPlace placeholder='searchplace' icon={<FaMapMarkerAlt />} />
        </Header>
        <OffersCount>
          <h1>Number of Offers</h1>
          <Number>{count}</Number>
        </OffersCount>
        <Offers>
          {filteredOffers.map((offer) => (
            <Offer key={offer._id} local={offer.local} title={offer.title} logo={offer.logo} contract={offer.contract} _id={offer._id} company={offer.company} experience={offer.experience} />
          ))}
        </Offers>
      </Container>
    </>
  )
}

export default OffersPage