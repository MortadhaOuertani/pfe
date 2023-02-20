import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GetCompanyoffers } from '../../redux/actions/offerActions'
import Offer from '../offerspage/offer/offer'
import { Offers } from '../offerspage/offerspageElements'
import { Container } from '../postingoffers/postElements'
import { Body, CompanyNavbar, Header, Nav } from './CompanyHomePageElements'

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
        <Nav></Nav>
      <Container>
        <CompanyNavbar></CompanyNavbar>
        <Header></Header>
        <Body>
          <Offers>
          <input onChange={handleSearch} placeholder='Search'></input>
        {filteredOffers.map((offer) => <Offer key={offer._id} _id={offer._id} company={offer.company} experience={offer.experience} />)}
          </Offers>
        </Body>
      </Container>
    </>
  )
}

export default CompanyHomePage