import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetOffers } from '../../redux/actions/offerActions'
import Offer from './offer/offer'
import { NavbarDiv } from './OfferDetailsElements'
import { Container, Button, ContainerOne, Header, Icon, Li, Number, Offers, OffersCount, SearchJob, SearchPlace, Ul, P } from './offerspageElements'
import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr'

const OffersPage = () => {
  const dispatch = useDispatch()
  const offers = useSelector(state => state.offers)
  const [searchJobTerm, setSearchJobTerm] = useState("");
  const [searchPlaceTerm, setSearchPlaceTerm] = useState("");
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [count, setCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchJob = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchJobTerm(value);
    filterOffers(value, searchPlaceTerm);
  };

  const handleSearchPlace = (gov) => {
    const value = gov.toLowerCase();
    setSearchPlaceTerm(value);
    filterOffers(searchJobTerm, value);
  };

  const filterOffers = (searchJob, searchPlace) => {
    if (searchJob === "" && searchPlace === "") {
      setFilteredOffers(offers.OFFERSS);
    } else {
      const filtered = offers.OFFERSS.filter(
        (offer) =>
          (searchJob === "" || (offer.search && Array.isArray(offer.search) && offer.search.some((search) => search.toLowerCase().includes(searchJob)))) &&
          (searchPlace === "" || (offer.local && offer.local.toLowerCase().includes(searchPlace)))
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

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  }
  const governates = ["Tunis", "EZJ", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Sousse", "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Medenine", "Tataouine", "Tozeur", "Kebili"];


  return (
    <>
      <ContainerOne>
        <Container>
          <Header>
            <SearchJob
              placeholder='searchplace'
              type="text"
              value={searchJobTerm}
              onChange={handleSearchJob}
              style={{
                backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px 20px',
                backgroundPosition: "0px center",

              }}
            />

            <div style={{ position: "relative" }}>
              <Icon onClick={() => setShowDropdown(!showDropdown)}>
                <GrMapLocation size={30} />
              </Icon>
              {showDropdown && (
                <Ul showDropdown={showDropdown}>
                  {governates.map((gov) => (
                    //add number of offer infront of gov
                    <Li key={gov}>
                      <Button onClick={() => handleSearchPlace(gov)}>
                        <FaMapMarkerAlt color='black' /> <P>{gov}</P>
                      </Button>
                    </Li>
                  ))}
                </Ul>
              )}
            </div>

          </Header>
          <OffersCount>
            <h1>Number of Offers</h1>
            <Number>{count}</Number>
          </OffersCount>
          <Offers>
            {filteredOffers.map((offer) => (
              <Offer key={offer._id} date={offer.createdAt} local={offer.local} title={offer.title} logo={offer.logo} contract={offer.contract} _id={offer._id} company={offer.company} experience={offer.experience} />
            ))}
          </Offers>
        </Container>
      </ContainerOne>
    </>
  )
}

export default OffersPage

//<SearchPlace placeholder='searchplace' type="text" value={searchPlaceTerm} onChange={handleSearchPlace} icon={<FaMapMarkerAlt />} />
