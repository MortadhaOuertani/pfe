import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalComponent from '../../components/modal/Modal'
import { GetOneOffer } from '../../redux/actions/offerActions'
import { Container, TopContainer, BottomContainer, Button, NavbarDiv, H2, H3 } from './OfferDetailsElements'

const OfferDetails = (props) => {
    const dispatch = useDispatch()
    const offer = useSelector(state => state.offers)
    const { id } = useParams()
    const [modalShow, setModalShow] = useState(true);
    const handleModal = (state) => {
        setModalShow(!state);
      };
    useEffect(() => {
        dispatch(GetOneOffer(id))
    }, [])
    return (
        <>
            <ModalComponent
                handleModal={handleModal}
                modal={modalShow}
            />
            <NavbarDiv></NavbarDiv>
            <Container>
                <TopContainer>
                    <H2> Le titre d'entreprise</H2>
                    <p>Nom d'entreprise </p>
                    <p onClick={handleModal(!modalShow)}>Emplacement</p>
                </TopContainer>
                <BottomContainer>
                    <H3>{offer.OFFERS.experience}</H3>
                </BottomContainer>
            </Container>
        </>
    )
}

export default OfferDetails
