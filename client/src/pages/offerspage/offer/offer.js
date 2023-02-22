import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, Middleside, MiddleSide, RightSide, Topside } from './offerElement'
import ModalComponent from '../../../components/modal/Modal'
import { MdLocationOn } from 'react-icons/md'


const Offer = ({ experience, _id, title, company, logo, contract, local }) => {
  const [resultdate, setResultdate] = useState(false);
  const [companydata, setCompanydata] = useState([])

  useEffect(() => {
    GetOfferDate()
    GetCompanyData(company)

  }, [])

  const GetCompanyData = (id) => {
    axios
      .get(`http://localhost:3600/api/companydata/${id}`)
      .then(res => {

        setCompanydata(res.data)
      })
  }
  const GetOfferDate = () => {
    axios
      .get("http://localhost:3600/api/date")
      .then(res => {
        console.log(res.data.result)
        setResultdate(res.data.result)
      })
      .catch(err => {
        console.log(err.message)
      });
  }
  return (
    <>
      <Container>
        <Topside>
          <Imgdiv><Img src="" /></Imgdiv><Info><H2>{title}</H2>{companydata.map(item => (<H3 key={item.id}>{item.name}</H3>))}<p style={{ color: "grey" }}>date</p></Info>
        </Topside>
        <Middleside>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{experience}</h4></Item>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{contract}</h4></Item>
          <Item><MdLocationOn style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{local}</h4></Item>
        </Middleside>
        <Footer>
          <Link to={`/offers/${_id}`}>
            <Button variant="primary">
              Voir plus
            </Button>
          </Link>
        </Footer>
      </Container>
    </>)
}

export default Offer