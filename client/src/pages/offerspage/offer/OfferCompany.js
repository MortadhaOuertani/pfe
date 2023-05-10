import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, ButtonDelete, Buttondiv, ButtonEdit, Container, Footer, H2, H3, Img, Imgdiv, Info, Item, LeftSide, LinkS, Links, Middleside, MiddleSide, RightSide, Topside } from './OfferCompanyElement'
import { GrLocation } from 'react-icons/gr'
import { FcCalendar, FcBusiness, FcDocument } from "react-icons/fc";
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

const OfferCompany = ({ experience, _id, title, createdAt, company, logo, contract, local }) => {
  const [resultdate, setResultdate] = useState(false);
  const [companydata, setCompanydata] = useState({});
  const base64Image = `data:image/jpeg;base64,${companydata?.logo}`;
  const [isLoading, setIsLoading] = useState(true);
  const [img, setImg] = useState(null);

  useEffect(() => {
    GetOfferDate()
    GetCompanyData(company)

  }, [])
  console.log(base64Image)
  const GetCompanyData = (id) => {
    axios
      .get(`http://localhost:3600/api/companydata/${id}`)
      .then(res => {
        setCompanydata(res.data)
        setIsLoading(false)
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

  useEffect(() => {
    fetchImg(companydata);
  }, [companydata]);
  async function fetchImg(companydata) {
    const { default: file } = await import(`../../../ProfilePictures/${companydata?.logo}`);
    setImg(file)
  }
  const Deleteoffer = (id) => {
    axios.delete(`http://localhost:3600/api/offers/${id}`)
      .then(res => {
        console.log("deleted successfuly")
        window.location.reload();
      })
      .catch(err => {
        console.log("error")
      })
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Topside>
            <Imgdiv>
              {companydata.logo && <Img src={img} />}
            </Imgdiv>
            <Info>
              <H2>{title}</H2>
              {companydata && (
                <div>
                  <H3>{companydata.name}</H3>
                  <FcCalendar /><p>{new Date(companydata.createdAt).toISOString().substring(0, 10)}</p>
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
            <LinkS to={`/appliedOffer/${_id}`}>
              <Button variant="primary">
                Candidates
              </Button>
            </LinkS>
            <Buttondiv>
              <ButtonDelete onClick={() => Deleteoffer(_id)}>
                <AiOutlineClose color={"white"} size={20} />
              </ButtonDelete>
              <ButtonEdit to={`/edit/${_id}`}>
                <AiOutlineEdit color={"white"} size={25} />
              </ButtonEdit>
            </Buttondiv>


          </Footer>
        </Container>
      )}
    </>
  );
}

export default OfferCompany