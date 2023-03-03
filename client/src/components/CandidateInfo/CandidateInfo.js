import React, { useEffect, useState } from 'react';
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed } from './CandidateInfoElements';
const CandidateInfo = ({ cv, phone, diplome,age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  // <iframe src={pdfFile} width="100%" height="100%"></iframe>{/*to display file type pdf   */ }
  const base64Image = `data:image/jpeg;base64,${profile}`;

  useEffect(() => {
    console.log(profile)
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);

  return (
    <>
      <Container>
        <Header>
          <Left><Img src={base64Image} /></Left>
          <Right>
            <FullName><H3>{name} {lastName}</H3><H3> {age} years old</H3>
            </FullName>
            <Information><H3>{email}</H3><H3>{phone}</H3><H3>{diplome}</H3></Information>
          </Right>
        </Header>
        <Lowerside>
         <P>{letter}</P> 
          <Footer><Button >ACCEPT</Button><ButtonRed>Refuse</ButtonRed></Footer>
        </Lowerside>
      </Container>
    </>
  );
};

export default CandidateInfo;
