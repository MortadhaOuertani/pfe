import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CandidateInfo from '../../components/CandidateInfo/CandidateInfo';
import { Container, Header, Middle } from './ApplingElements'
import { Document, Page } from "react-pdf";

const Appling = () => {
    const { id } = useParams();
    const [offer, setOffer] = useState([])
    const [loading, setLoading] = useState(true);

    const GetCandidates = (id) => {
        axios.get(`http://localhost:3600/api/GetOfferApplicants/${id}`)
            .then((res) => {
                setOffer(res.data)
                setLoading(false);

            }).catch(err=>console.log(err))
    }
    useEffect(() => {
        GetCandidates(id)
    }, [offer])
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Container>
                <Header><h1>{offer.title}</h1></Header>
                <Middle>
                    {offer && offer.candidates.map(({ cv, email, name, letter }) => (
                        <CandidateInfo key={name} cv={cv} />
                    ))}
                </Middle>

            </Container>
        </>
    )
}

export default Appling