import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS } from './CandidateInfoElements';
const CandidateInfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  // <iframe src={pdfFile} width="100%" height="100%"></iframe>{/*to display file type pdf   */ }
  const base64Image = `data:image/jpeg;base64,${profile}`;
  const { id } = useParams()

  console.log(id, cadidatId)
  useEffect(() => {
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);  //import dynamique : sabina library tkhallina naamlou import dynamique
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);

  const RefuseEmail = (id) =>{
    axios.post(`http://localhost:3600/api/EmailRefuse/${id}`)
    .then(
      console.log("success")
    )
    .catch((err)=>{
      console.log("error")
    })
  }

  const AcceptRHEmail = (id) =>{
    axios.post(`http://localhost:3600/api/AcceptRHEmail/${id}`)
    .then(
      console.log("success")
    )
    .catch((err)=>{
      console.log("error")
    })
  }
  
  const accept = (id, cadidatId) => {
    axios.post(`http://localhost:3600/api/accept/${id}/${cadidatId}`)
      .then((res) => {
        setmessage(res.data.message)
      }
      )
      .catch((err) => {
        setmessage(err.response.data.message)
      })
  }
  const refuse = (_id, cadidatId) => {
    axios.post(`http://localhost:3600/api/refuse/${id}/${cadidatId}`)
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
        <LinkS to={{
          pathname: `/${id}/candidate`,
          state: {
            pdfFile: pdfFile,
            letter: letter
          }
        }}>
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
          <Footer><Button onClick={() => {accept(id, cadidatId) ; AcceptRHEmail(cadidatId) }} >ACCEPT</Button><ButtonRed onClick={() => {refuse(id, cadidatId); RefuseEmail(cadidatId)}}>Refuse</ButtonRed></Footer>
        </Lowerside>
      </Container>
    </>
  );
};

export default CandidateInfo;
