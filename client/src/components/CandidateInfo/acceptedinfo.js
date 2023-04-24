import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS } from './CandidateInfoElements';
import { useSelector } from 'react-redux';
const AcceptedInfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  const base64Image = `data:image/jpeg;base64,${profile}`;
  const { id } = useParams()
  useEffect(() => {
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);
  const Info ={pdfFile,letter}
  const auth = useSelector(state => state.auth)

  return (
    <>
      <Container>
        <LinkS to={`/${id}/candidate`}
        state= {Info} > {// Pass the state object as props 
}
        <Left to={`/Profile/${auth.user.id}`} ><Img src={base64Image} /></Left>
        <Header>
          <Right>
            <FullName><H3>{name} {lastName}</H3><H3> {age} years old</H3>
            </FullName>
            <Information><H3>{email}</H3><H3>{phone}</H3><H3>{diplome}</H3></Information>
          </Right>
        </Header>
      </LinkS >

    </Container>
    </>
  );
};

export default AcceptedInfo;