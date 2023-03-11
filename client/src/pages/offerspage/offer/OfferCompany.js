import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, Middleside, MiddleSide, RightSide, Topside } from './offerElement'
import ModalComponent from '../../../components/modal/Modal'
import { MdLocationOn } from 'react-icons/md'
import { LinkR } from './OfferCompanyElement'


const OfferCompany = ({ experience, _id, title, createdAt , company, logo, contract, local }) => {
  const [resultdate, setResultdate] = useState(false);
  const [companydata, setCompanydata] = useState([])

  useEffect(() => {
   

  }, [])

  
  return (
    <>
      <LinkR to={`/appliedOffer/${_id}`}> <Container>
        <Topside>
          <Imgdiv><Img src="" /></Imgdiv><Info><H2>{title}</H2>{companydata.map(item => (<H3 key={item.id}>{item.name} {item.createdAt}</H3>))}</Info>
        </Topside>
        <Middleside>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{experience}</h4></Item>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{contract}</h4></Item>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{local}</h4></Item>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{createdAt}</h4></Item>

        </Middleside>
        <Footer>
         
            <Button variant="primary">
              Voir plus
            </Button>
        </Footer>
      </Container>
      </LinkR>

    </>)
}

export default OfferCompany;