import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalComponent from '../../components/modal/Modal'
import { GetOneOffer } from '../../redux/actions/offerActions'
import { Container, TopContainer, BottomContainer, Button, NavbarDiv, H2, H3 } from './OfferDetailsElements'

const OfferDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const dispatch = useDispatch();
  const offer = useSelector(state => state.offers);
  const { id } = useParams();
  const containerStyle = isFrozen ? { overflow: 'hidden', height: '100%', boxSizing: 'border-box' }
    : { boxSizing: 'border-box', height: '100%' };

 
  useEffect(() => {
    dispatch(GetOneOffer(id));


  }, []);

  const setModalShowAndUpdateFreeze = (value) => {
    setModalShow(value);
    setIsFrozen(value);
  }

  return (
    <>
      {modalShow ?
        <ModalComponent offer={offer}setModalShow={setModalShowAndUpdateFreeze} modalShow={modalShow} previsFrozen={isFrozen} /> : null
      }

      <NavbarDiv></NavbarDiv>
      <Container style={containerStyle}>
        <TopContainer>
          <H2> Le titre d'entreprise</H2>
          <p>Nom d'entreprise </p>
          <p >Emplacement</p>
          <button onClick={() => setModalShowAndUpdateFreeze(!modalShow)}>apply</button>
        </TopContainer>
        <BottomContainer>
          <H3>{offer.OFFERS.experience}</H3>
        </BottomContainer>
      </Container>
    </>
  );
};
export default OfferDetails;