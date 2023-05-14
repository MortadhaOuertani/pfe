import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcOk } from 'react-icons/fc';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Icons, Container, Header, Left, FullName, Right, Img, H3, Information, LinkS, H } from './TechnicalinfoElements';
const Technicalinfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('');
  const [img, setImg] = useState(null);
  // <iframe src={pdfFile} width="100%" height="100%"></iframe>{/*to display file type pdf   */ }
  const { id } = useParams()

  async function fetchImg(profile) {
    const { default: file } = await import(`../../ProfilePictures/${profile}`);
    setImg(file)
  }
  useEffect(() => {
    fetchImg(profile);
  }, [profile]);

  const EmailRefuseTech = (id) => {
    axios.post(`http://localhost:3600/api/EmailRefuseTech/${id}`)
      .then(
        console.log("success")
      )
      .catch((err) => {
        console.log("error")
      })
  }

  const AcceptTechnEmail = (id) => {
    axios.post(`http://localhost:3600/api/AcceptTechnEmail/${id}`)
      .then(
        console.log("success")
      )
      .catch((err) => {
        console.log("error")
      })
  }
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

        <Left to={`/Profile/${cadidatId}`}><Img src={img} /></Left>
        <Header>
          <Right>
            <Icons>
              <FcOk style={{ marginRight: '30px', height: '20px', width: '20px' }} onClick={() => { accept(id, cadidatId); AcceptTechnEmail(cadidatId) }} />

              <AiFillCloseCircle style={{ color: 'red', marginRight: '30px', height: '20px', width: '20px' }} onClick={() => { refuse(id, cadidatId); EmailRefuseTech(cadidatId) }} />
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



export default Technicalinfo;
