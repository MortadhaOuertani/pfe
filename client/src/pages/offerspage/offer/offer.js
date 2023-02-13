import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalComponent from '../../../components/modal/Modal';
import { Background, Button, Container, LeftSide, MiddleSide, RightSide } from './offerElement'

const Offer = ({ experience, _id }) => {
   
    return (
        <>
            <Container>
                <Link to={`/offers/${_id}`}> <LeftSide>{experience}</LeftSide></Link>
                <MiddleSide></MiddleSide>
                <RightSide>
                    <Button variant="primary">
                        Launch vertically centered modal
                    </Button>
                </RightSide>
            </Container>
        </>)
}

export default Offer