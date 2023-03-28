import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetCompanyoffers } from '../../redux/actions/offerActions'
import Offer from '../offerspage/offer/offer'
import { Container, Button, ContainerOne, Header, Icon, Li, Number, Offers, OffersCount, SearchJob, SearchPlace, Ul, P, UpperSide, H1, H1Name, BtnAddOffer, LinkS } from './CompanyHomePageElements'
import OfferCompany from '../offerspage/offer/OfferCompany'
import { FaMapMarkerAlt, FaSearchLocation } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr'
import axios from 'axios'
const CompanyHomePage = () => {
  const dispatch = useDispatch()
  const offers = useSelector(state => state.offers)
  const [searchJobTerm, setSearchJobTerm] = useState("");
  const [searchPlaceTerm, setSearchPlaceTerm] = useState("");
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [count, setCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [CompanyData, setCompanydata] = useState();
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setFilteredOffers(offers.OFFERSS);
    } else {
      const filtered = offers.OFFERSS.filter(
        (offer) =>
          (offer.search &&
            Array.isArray(offer.search) &&
            offer.search.some((search) =>
              search.toLowerCase().includes(value))) ||
          (offer.title &&
            offer.title.toLowerCase().includes(value))
      );
      setFilteredOffers(filtered);
    }
  };

  useEffect(() => {
    dispatch(GetCompanyoffers())
  }, [dispatch])

  useEffect(() => {
    setFilteredOffers(offers.OFFERSS || []);
  }, [offers]);

  useEffect(() => {
    setCount(filteredOffers.length);
  }, [filteredOffers]);


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
  useEffect(() => {
    if (offers.OFFERSS[0]?.company) {
      GetCompanyData(offers.OFFERSS[0].company);
    }
    console.log(CompanyData)
  }, [offers.OFFERSS,filteredOffers]);

  const GetCompanyData = (id) => {
    axios.get(`http://localhost:3600/api/companydata/${id}`).then((res) => {
      setCompanydata(res.data);
      console.log(CompanyData);

    });
  };

  return (
    <>
      <ContainerOne>
        <Container>
          <UpperSide>
            <H1>Company Interface
            </H1>
            <LinkS to="/postoffer">
            <BtnAddOffer>Postoffer</BtnAddOffer>
            </LinkS>
          </UpperSide>
          <Header>
            <SearchJob
              placeholder='Search job'
              type="text"
              onChange={handleSearch}
              style={{
                backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px 20px',
                backgroundPosition: "0px center",

              }}
            />
            <H1Name>{CompanyData && CompanyData[0]?.name}</H1Name>
          </Header>
          <OffersCount>
          </OffersCount>
          <Offers>
            {filteredOffers.map((offer) => (
              <OfferCompany key={offer._id} local={offer.local} title={offer.title} logo={offer.logo} contract={offer.contract} _id={offer._id} company={offer.company} experience={offer.experience} />
            ))}
          </Offers>
        </Container>
      </ContainerOne>
    </>
  )
}

export default CompanyHomePage

/*  <Container>
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
      </Container>*/