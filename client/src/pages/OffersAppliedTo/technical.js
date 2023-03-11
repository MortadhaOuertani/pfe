import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CandidateInfo from '../../components/CandidateInfo/CandidateInfo';
import { Container, Header, LinkS, Middle, Templates } from './technicalElements'
import { Document, Page } from "react-pdf";
import Technicalinfo from '../../components/CandidateInfo/Technicalinfo';
import { RH, TechnicalD } from './technicalElements';
import { FaCog } from 'react-icons/fa';
import './reacticons.css'
import { BsFillPersonCheckFill, BsFillPersonFill } from 'react-icons/bs';


const Technical = () => {
    const { id } = useParams();
    const [offer, setOffer] = useState([])
    const [loading, setLoading] = useState(true);

    const GetCandidates = (id) => {
        axios.get(`http://localhost:3600/api/GetOfferApplicants/${id}`)
            .then((res) => {
                setOffer(res.data)
                setLoading(false);

            }).catch(err => console.log(err))
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
                <Header><h1>{offer.title}</h1>
                    <Templates>
                        <LinkS to={`/appliedOffer/${id}`}>
                            <TechnicalD>
                                <BsFillPersonFill className='iconz' size={30}>
                                </BsFillPersonFill>
                            </TechnicalD>
                        </LinkS>
                        <LinkS to={`/technicaltest/${id}`}>
                            <RH>
                                <FaCog size={30} className='iconz' >
                                </FaCog>
                            </RH>
                        </LinkS>
                        <LinkS to={`/accepted/${id}`}>
                            <TechnicalD>
                                <BsFillPersonCheckFill className='iconz' size={30}></BsFillPersonCheckFill>
                            </TechnicalD>
                        </LinkS>
                    </Templates>
                </Header>
                <Middle>
                        {offer && offer.technicalTest.map(({ _id, cv, profile, phone, email, diplome, lastName, age, name, letter }) => (
                            <Technicalinfo key={_id} profile={profile} cadidatId={_id} phone={phone} diplome={diplome} age={age} lastName={lastName} letter={letter} email={email} name={name} cv={cv} />
                        ))}
                </Middle>

            </Container>
        </>
    )
}

export default Technical;