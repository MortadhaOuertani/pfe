import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, ButtonDelete, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, Middleside, MiddleSide, RightSide, Topside } from './offerElement'
import { GrLocation } from 'react-icons/gr'
import { FcCalendar, FcBusiness, FcDocument } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux'


const Offer = ({ experience, date, _id, title, createdAt, company, logo, contract, local }) => {
  const [resultdate, setResultdate] = useState(false);
  const [companydata, setCompanydata] = useState([]);
  const base64Image = `data:image/jpeg;base64,${companydata[0]?.logo}`;

  const auth = useSelector(state => state.auth)
  const user = auth.user
  useEffect(() => {
    GetCompanyData(company)
    console.log(base64Image)
    console.log(companydata.logo)

  }, [])
  const Deleteoffer = (id) => {
    axios.delete(`http://localhost:3600/api/offers/${id}`)
      .then(res => {
        console.log("deleted successfuly")
      })
      .catch(err => {
        console.log("error")
      })
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
      <Container>
        <Topside>
          <Imgdiv><Img src={base64Image} />
          </Imgdiv>
          <Info>
            <H2>{title}</H2>
            {companydata.map(item => (<div key={item.id}>
              <H3>{item.name}</H3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FcCalendar /><p>{new Date(date).toISOString().substring(0, 10)}</p>
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
            <Button>
              View more
            </Button>
          </Link>
          {user.id === company ?
            <ButtonDelete onClick={() => { Deleteoffer(_id) }}>
              <AiOutlineClose color={"white"} size={20} />
            </ButtonDelete> : null
          }
        </Footer>
      </Container>
    </>)
}

export default Offer