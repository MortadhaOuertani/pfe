import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, ButtonDelete, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, Middleside, MiddleSide, RightSide, Topside } from './offerElement'
import { GrLocation } from 'react-icons/gr'
import { FcCalendar, FcBusiness, FcDocument } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux'


const Offer = ({ experience, date, _id, title, createdAt, company, logo, contract, local }) => {
  const [companydata, setCompanydata] = useState({});
  const auth = useSelector(state => state.auth)
  const user = auth.user
  const [isLoading, setIsLoading] = useState(true);


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
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3600/api/companydata/${id}`)
        .then(res => {
          setCompanydata(res?.data)
          resolve(res?.data);
        })
        .catch(err => {
          setIsLoading(false)
          console.log("error")
          reject(err);
        })
    });
  }

  GetCompanyData(company).then(() => {
  }).catch(() => {
    setIsLoading(false)
  }).finally(() => {
    setIsLoading(false)

  })

  const base64Image = `data:image/jpeg;base64,${companydata?.logo}`;


  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Topside>
            <Imgdiv>
              {companydata.logo && <Img src={base64Image} />}
            </Imgdiv>
            <Info>
              <H2>{title}</H2>
              {companydata && (
                <div>
                  <H3>{companydata.name}</H3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FcCalendar />
                    <p>{new Date(date).toISOString().substring(0, 10)}</p>
                  </div>
                </div>
              )}
            </Info>
          </Topside>
          <Middleside>
            <Item>
              <FcBusiness style={{ color: "grey" }} />
              <h4 style={{ color: "grey" }}>{experience}</h4>
            </Item>
            <Item>
              <FcDocument style={{ color: "grey" }} />
              <h4 style={{ color: "grey" }}>{contract}</h4>
            </Item>
            <Item>
              <GrLocation style={{ color: "grey" }} />
              <h4 style={{ color: "grey" }}>{local}</h4>
            </Item>
          </Middleside>
          <Footer>
            <Link to={`/offers/${_id}`}>
              <Button>View more</Button>
            </Link>
            {user.id === company ? (
              <ButtonDelete onClick={() => Deleteoffer(_id)}>
                <AiOutlineClose color={"white"} size={20} />
              </ButtonDelete>
            ) : null}
          </Footer>
        </Container>
      )}
    </>
  );
}

export default Offer