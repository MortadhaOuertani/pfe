import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalComponent from '../../components/modal/Modal'
import { GetOneOffer } from '../../redux/actions/offerActions'
import { Container, TopContainer, BottomContainer, Button, NavbarDiv, Hr, H2, H3, ContainerOne, Div, P, DIV, SearchDiv, Li } from './OfferDetailsElements'

const OfferDetails = ({ experience, _id, title, createdAt, company, logo, contract, local }) => {
  const [companydata, setCompanydata] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //state to track if the modal is open or closed
  const [isFrozen, setIsFrozen] = useState(false);
  const dispatch = useDispatch();
  const offer = useSelector(state => state.offers);
  const { id } = useParams();
  const containerStyle = isFrozen ? { overflow: 'hidden', height: '100%', boxSizing: 'border-box' }
    : { boxSizing: 'border-box', height: '100%' };
  const expirationDate = offer.OFFERS?.dateExpiration;
  const formattedDate = expirationDate && new Date(expirationDate).toLocaleDateString();

  useEffect(() => {
    dispatch(GetOneOffer(id));
    console.log(offer.OFFERS.company)
  }, [dispatch, id]);

  useEffect(() => {
    if (offer.OFFERS) {
      GetCompanyData(offer.OFFERS.company);
    }
  }, [offer]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);


  const setModalShowAndUpdateFreeze = (value) => {
    setModalShow(value);
    setIsFrozen(value);
    setIsModalOpen(value);
  }

  const GetCompanyData = (id) => {
    axios
      .get(`http://localhost:3600/api/companydata/${id}`)
      .then(res => {
        setCompanydata(res.data)
      })
  }

  return (
    <>
      {modalShow ?
        <ModalComponent offer={offer} setModalShow={setModalShowAndUpdateFreeze} modalShow={modalShow} previsFrozen={isFrozen} /> : null
      }
      <ContainerOne>
        <Container style={containerStyle}>
          <TopContainer>
            <H2>{offer.OFFERS?.title}</H2>
            {companydata.map(item => (
              <div key={item.id}>
                <DIV><h4 style={{ marginLeft: '20px' }}>Company's name : </h4><P> {item.name}</P></DIV>
                <DIV><h4 style={{ marginLeft: '20px' }}>Date of creation : </h4> <P>{new Date(item.createdAt).toISOString().substring(0, 10)}</P></DIV>
              </div>
            ))}
            <P>{offer.OFFERS?.local}</P>
            <Hr />

            <Button onClick={() => { setModalShowAndUpdateFreeze(!modalShow); }}>Apply</Button>
          </TopContainer>
          <BottomContainer>
            <DIV><H3><label>Experience : </label></H3><p style={{ paddingTop: '12px' }}>{offer.OFFERS?.experience}</p></DIV>
            <div><Div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: offer.OFFERS?.description }}></Div></div>
            <DIV><H3><label>Expiration date:  </label></H3><p style={{ paddingTop: '12px' }}> {formattedDate}</p></DIV>
            <div style={{ display: 'flex', flexDirection: 'row' }}><H3>Keywords:</H3>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', paddingTop: '5px' }}>
                {offer.OFFERS && offer.OFFERS.search && offer.OFFERS.search.map((search, index) => (
                  <SearchDiv>
                    <Li key={index}>{search}</Li>
                  </SearchDiv>
                ))}
              </ul>
            </div>
          </BottomContainer>
        </Container>
      </ContainerOne>
    </>
  );
};

export default OfferDetails;
