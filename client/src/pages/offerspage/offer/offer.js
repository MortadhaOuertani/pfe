import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Container, LeftSide, MiddleSide, RightSide } from './offerElement'
import ModalComponent from '../../../components/modal/Modal'


const Offer = ({ experience, _id, company }) => {
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
        <LeftSide>{experience}</LeftSide>
        <MiddleSide></MiddleSide>
        <RightSide>
          {resultdate ? <p>klll</p> : null}
          <Link to={`/offers/${_id}`}>
            <Button variant="primary">
              Voir plus
            </Button></Link>
          {companydata.map(item => (<p key={item.id}>{item.email}</p>))}  </RightSide>
      </Container>
    </>)
}

export default Offer