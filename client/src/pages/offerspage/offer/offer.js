import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalComponent from '../../../components/modal/Modal';
import { Background, Button, Container, LeftSide, MiddleSide, RightSide } from './offerElement'

const Offer = ({ experience, _id }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
<ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <Container>
                <Link to={`/offers/${_id}`}> <LeftSide>{experience}</LeftSide></Link>
                <MiddleSide></MiddleSide>
                <RightSide>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Launch vertically centered modal
                    </Button>
                </RightSide>
            </Container>
        </>)
}

export default Offer