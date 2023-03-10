import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, Middleside, MiddleSide, RightSide, Topside } from './offerElement'
import {GrLocation } from 'react-icons/gr'
import { FcCalendar ,  FcBusiness,FcDocument } from "react-icons/fc";


const Offer = ({ experience, _id, title, createdAt, company, logo, contract, local }) => {
  const [resultdate, setResultdate] = useState(false);
  const [companydata, setCompanydata] = useState([]);
  const base64Image = `data:image/jpeg;base64,${logo}`;

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
          <Imgdiv><div><Img src={base64Image} /></div></Imgdiv><Info><H2>{title}</H2>{companydata.map(item => (<div key={item.id}>
            <H3>{item.name}</H3>
            <div style={{ display: 'flex', alignItems: 'center'  }}>
              <FcCalendar /><p>{new Date(item.createdAt).toISOString().substring(0, 10)}</p>
            </div>
          </div>))}</Info>
        </Topside>
        <Middleside>
          <Item><FcBusiness style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{experience}</h4></Item>
          <Item><FcDocument style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{contract}</h4></Item>
          <Item><GrLocation style={{ color: "grey" }} /><h4 style={{ color: "grey" }}>{local}</h4></Item>
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