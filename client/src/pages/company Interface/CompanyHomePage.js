import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetCompanyoffers } from '../../redux/actions/offerActions'
import Offer from '../offerspage/offer/offer'
import { Offers } from '../offerspage/offerspageElements'
import { Container } from '../postingoffers/postElements'
import { Body, CompanyNavbar, Header, Nav } from './CompanyHomePageElements'
import OfferCompany from '../offerspage/offer/OfferCompany'

const CompanyHomePage = () => {
  const offers = useSelector(state => state.offers)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOffers, setFilteredOffers] = useState(offers.OFFERSS);
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
  useEffect(()=>{
    dispatch(GetCompanyoffers())
  },[dispatch])
  
  useEffect(()=>{
    setFilteredOffers(offers.OFFERSS || []);
  },[offers])
  return (
    <>
      <Container>
        <Header>
        <input onChange={handleSearch} placeholder='Search'></input>
        </Header>
        <Body>
          <Offers>
          {filteredOffers.map((offer) => (
            <OfferCompany style={{textDecoration:"none",color:"inherit"}} key={offer._id}local={offer.local}title={offer.title} logo={offer.logo} contract={offer.contract} _id={offer._id} company={offer.company} experience={offer.experience} />
          ))}
          </Offers>
        </Body>
      </Container>
    </>
  )
}

export default CompanyHomePage