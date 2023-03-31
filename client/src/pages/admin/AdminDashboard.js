import React, { useEffect, useState } from 'react'
import { NavbarDiv } from '../offerspage/OfferDetailsElements'
import { Container, Div, Icon, Notif, Numbers } from './AdminDashboardElements'
import Sidebar1 from './Sidebar/Sidebar1'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCandidates, getCompanies, GetOffers } from '../../redux/actions/offerActions'
import { FcOrganization , FcConferenceCall, FcDocument} from "react-icons/fc";



const AdminDashboard = () => {
    const dispatch = useDispatch();
    const [candidateCount, setCandidateCount] = useState(0);
    const [companyCount, setCompanyCount] = useState(0);
    const [offerCount, setOfferCount] = useState(0);
    const offers = useSelector(state => state.offers);
    const companies = useSelector(state => state.companies);
    const candidates = useSelector(state => state.candidates);

    useEffect(() => {
        dispatch(GetOffers());
    }, [dispatch]);

    useEffect(() => {
        setOfferCount(offers.OFFERSS.length); //length is : the number of all the offers , filteredOffers is just a state 
    }, [offers.OFFERSS]);

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);

    useEffect(() => {
        setCompanyCount(companies.COMPANIES.length); //length is : the number of all the companies 
    }, [companies.COMPANIES]);

    useEffect(() => {
        dispatch(getAllCandidates());
    }, [dispatch]);

    useEffect(() => {
        setCandidateCount(candidates.CANDIDATES.length); //length is : the number of all the candidates
    }, [candidates.CANDIDATES]);

    return (
        <>
            <NavbarDiv />
            <Container>
                <Sidebar1 />
                

                <Numbers>
                    <Div>
                        <Icon><FcDocument style={{ paddingLeft: '10px',height: '30px' , width: '30px' }} /><h3>Offers</h3></Icon>
                        <h3>{offerCount}</h3>
                    </Div>
                    <Div>
                        <Icon><FcConferenceCall style={{ paddingLeft: '10px' ,height: '30px' , width: '30px'}} /><h3>Candidates</h3></Icon>
                        <h3>{candidateCount}</h3>
                    </Div>
                    <Div>
                        <Icon><FcOrganization style={{ paddingLeft: '10px' ,height: '30px' , width: '30px' }} /><h3>Companies</h3></Icon>
                        <h3>{companyCount}</h3>
                    </Div>
                </Numbers>
            </Container>
        </>
    )
}

export default AdminDashboard
