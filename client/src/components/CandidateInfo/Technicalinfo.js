import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS } from './CandidateInfoElements';
const Technicalinfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  // <iframe src={pdfFile} width="100%" height="100%"></iframe>{/*to display file type pdf   */ }
  const base64Image = `data:image/jpeg;base64,${profile}`;
  const { id } = useParams()

  useEffect(() => {
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
    console.log(pdfFile)

  }, [name]);

  const accept = (id, cadidatId) => {
    axios.post(`http://localhost:3600/api/acceptTechnical/${id}/${cadidatId}`)
      .then((res) => {
        setmessage(res.data.message)
      }
      )
      .catch((err) => {
        setmessage(err.response.data.message)
      })
  }
  const refuse = (_id, cadidatId) => {
    axios.post(`http://localhost:3600/api/refuseTechnical/${id}/${cadidatId}`)
      .then((res) => {
        setmessage(res.data.message)
      }
      )
      .catch((err) => {
        setmessage(err.response.data.message)
      })
  }
  return (
    <>
      <Container>
        <LinkS to={`/${id}/candidate`} state={{ pdfFile: pdfFile, letter: letter }}>
          <Left><Img src={base64Image} /></Left>  
          <Header>
            <Right>
              <FullName><H3>{name} {lastName}</H3><H3> {age} years old</H3>
              </FullName>
              <Information><H3>{email}</H3><H3>{phone}</H3><H3>{diplome}</H3></Information>
            </Right>
          </Header>
        </LinkS>

        <Lowerside>
          <P>{letter}</P>
          <Footer><Button onClick={() => accept(id, cadidatId)} >ACCEPT</Button><ButtonRed onClick={() => refuse(id, cadidatId)}>Refuse</ButtonRed></Footer>
        </Lowerside>
      </Container>
    </>
  );
};

export default Technicalinfo;
