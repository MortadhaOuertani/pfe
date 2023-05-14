import axios from 'axios'; //Use the Axios library to send a HTTP POST request to the specified URL with the id parameter appended to the end of the URL
import React, { useEffect, useState } from 'react';
import { FcOk } from 'react-icons/fc';
import { Link, useParams } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS, BgImg, Bg, H, Icons } from './CandidateInfoElements';
import { useSelector } from 'react-redux';
const CandidateInfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  const [img, setImg] = useState(null);
  const { id } = useParams()
  console.log(id, cadidatId)
  useEffect(() => {
    async function fetchPdf() {
      const { default: file } = await import(`../cvs${cv.data}`);  //import dynamique : sabina library tkhallina naamlou import dynamique
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);
  useEffect(() => {
    fetchImg(profile);
  }, [profile]);
  async function fetchImg(profile) {
    const { default: file } = await import(`../../ProfilePictures/${profile}`);
    setImg(file)
  }
  const RefuseEmail = (id) => {  //sends a request to the server to send a refusal email to the candidate with the given id
    axios.post(`http://localhost:3600/api/EmailRefuse/${id}`) 
      .then(
        console.log("success")
      )
      .catch((err) => {
        console.log("error")
      })
  }

  const AcceptRHEmail = (id) => {
    axios.post(`http://localhost:3600/api/AcceptRHEmail/${id}`)
      .then(
        console.log("success")
      )
      .catch((err) => {
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
      .then((res) => {     //callback, the console logs the string "success" if the request is successful
        setmessage(res.data.message) 
      }
      )
      .catch((err) => {  //callback, the console logs the string "error" if the request fails
        setmessage(err.response.data.message)
      })
  }
  const auth = useSelector(state => state.auth) // Access the auth state using the useSelector hook

  return (
    <>
      <Container>
      
          <Left to={`/Profile/${cadidatId}`}><Img src={img} /></Left>
          <Header>
            <Right>
              <Icons>
                <FcOk style={{ marginRight: '30px', height: '20px', width: '20px' }} onClick={() => { accept(id, cadidatId); AcceptRHEmail(cadidatId) }} />

                <AiFillCloseCircle style={{ color: 'red', marginRight: '30px', height: '20px', width: '20px' }} onClick={() => { refuse(id, cadidatId); RefuseEmail(cadidatId) }} />
              </Icons>
              <FullName><H>{name} {lastName}</H>
              </FullName>
              <Information><H3>Email : {email}</H3><H3>Phone : {phone}</H3><H3>Diploma : {diplome}</H3><H3>Age : {age} years old</H3></Information>

            </Right>
          </Header>


      </Container>
    </>
  );
};

export default CandidateInfo;
