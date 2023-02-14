import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ModalComponent from '../../../components/modal/Modal';
import { Background, Button, Container, LeftSide, MiddleSide, RightSide } from './offerElement'

const Offer = ({ experience, _id,company }) => {
    const [modalShow, setModalShow] = useState(false);
    const [resultdate, setResultdate] = useState(false);
    const [companydata,setCompanydata] = useState([])
    useEffect(() => {
        GetOfferDate()
        GetCompanyData(company)

      }, [])

    const GetCompanyData = (id) => {
        axios
          .get(`http://localhost:3600/api/companydata/${id}`)
          .then( res=> {

              setCompanydata(res.data)
          })
    }



    const GetOfferDate = ()=> {
        axios
          .get("http://localhost:3600/api/date")
          .then(res => {
            setResultdate(res.data.result)
          })
          .catch(err => {
                 console.log(err.message)
          });
      }
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
                    {resultdate? <p>klll</p> :null}
                    <Link to={`/offers/${_id}`}><Button variant="primary" onClick={() => setModalShow(true)}>
                        Voir plus
                    </Button></Link>
                    {companydata.map(item => ( <p key={item.id}>{item.email}</p> ))}  </RightSide>
            </Container>
        </>)
}

export default Offer