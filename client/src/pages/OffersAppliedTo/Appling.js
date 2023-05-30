import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BsFillPersonFill, BsFillPersonCheckFill } from 'react-icons/bs';
import CandidateInfo from '../../components/CandidateInfo/CandidateInfo';
import { Container, Header, LinkS, Middle, RH, Technical, Templates } from './ApplingElements'
import { Document, Page } from "react-pdf";
import { FaCog } from 'react-icons/fa';
import './reacticons.css'

const Appling = () => {
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
                <Header><h1>{offer.title}</h1> <h1>SoftSkills Test</h1> 
                    <Templates>
                        <LinkS to={`/appliedOffer/${id}`}>
                            <Technical>
                                <BsFillPersonFill className='iconz' size={30}></BsFillPersonFill>
                            </Technical>
                        </LinkS>
                        <LinkS to={`/technicaltest/${id}`}>
                            <RH>
                                <FaCog size={30} className='iconz' >
                                </FaCog>
                            </RH>
                        </LinkS>
                        <LinkS to={`/accepted/${id}`}>
                            <Technical>
                                <BsFillPersonCheckFill className='iconz' size={30}></BsFillPersonCheckFill>
                            </Technical>
                        </LinkS>
                    </Templates>
                </Header>
                <Middle>

                        {offer && offer.candidates.map(({ _id, cv, profile, phone, email, diplome, lastName, age, name, letter }) => (
                            <CandidateInfo key={_id} profile={profile} cadidatId={_id} phone={phone} diplome={diplome} age={age} lastName={lastName} letter={letter} email={email} name={name} cv={cv} />
                        ))}

                </Middle>

            </Container>
        </>
    )
}

export default Appling