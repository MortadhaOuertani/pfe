import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
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
  const dropdownRef = useRef(null);

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
    console.log(filteredOffers)
  }, [dispatch, Offers.OFFERSS]);

  useEffect(() => {
    setFilteredOffers(offers.OFFERSS || []);
  }, [offers]);

  useEffect(() => {
    setCount(filteredOffers.length);
  }, [filteredOffers]);


  const governates = ["Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Sousse", "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Medenine", "Tataouine", "Tozeur", "Kebili"];
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {//dropdownRef.current is checking whether the dropdownRef is currently pointing to a DOM element, which is determined by the presence of the current property. !dropdownRef.current.contains(event.target) is checking whether the event.target (i.e., the element that triggered the mousedown event) is NOT a descendant of the element pointed to by dropdownRef. The contains() method is called on the element that dropdownRef points to, and it returns true if the argument passed to it is a descendant of that element, and false otherwise.
      setShowDropdown(false);
    }
    // overall, this line is checking whether the mousedown event occurred outside of the dropdown menu (i.e., whether the clicked element is NOT a descendant of the dropdown menu). If that's the case, it sets the showDropdown state to false, which closes the dropdown menu.
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <>
      <ContainerOne>
        <Container >
          <Header >
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

            <div style={{ position: "relative" }} ref={dropdownRef}>
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

