import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ModalComponent from '../../components/modal/Modal'
import { GetOneOffer } from '../../redux/actions/offerActions'
import { Container, TopContainer, BottomContainer, Button, NavbarDiv, H2, H3 } from './OfferDetailsElements'

const OfferDetails = () => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch()
    const offer = useSelector(state => state.offers)
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(GetOneOffer(id))
    }, [])
    return (
        <>
        {modalShow?
    <ModalComponent  setModalShow={setModalShow} modalShow={modalShow} />:null
    }
            
            <NavbarDiv></NavbarDiv>
            <Container>
                <TopContainer>
                    <H2> Le titre d'entreprise</H2>
                    <p>Nom d'entreprise </p>
                    <p >Emplacement</p>
                    <button onClick={()=>setModalShow(!modalShow)}>apply</button>
                </TopContainer>
                <BottomContainer>
                    <H3>{offer.OFFERS.experience}</H3>
                </BottomContainer>
            </Container>
        </>
    )
}

export default OfferDetails
