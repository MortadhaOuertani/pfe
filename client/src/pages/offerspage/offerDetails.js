import React from 'react'
import { Container, topContainer, bottomContainer, Button, NavbarDiv, H2 } from './OfferDetailsElements'

const OfferDetails = () => {
   
    return (
        <>
        <NavbarDiv></NavbarDiv>
            <Container>
                <topContainer>
                    <H2> Le titre d'entreprise</H2>
                    <p>Nom d'entreprise </p> 
                    <p>Emplacement</p>
                </topContainer>
                <bottomContainer>
                    <h3>Description de l'annonce </h3>
                </bottomContainer>
                <Button type="submit" value="postuler" >Postuler</Button>
            </Container>
        </>
    )
}

export default OfferDetails
