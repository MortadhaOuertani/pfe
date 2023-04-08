import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FcOk } from 'react-icons/fc';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Icons,Container, Header, Left, FullName, Right, Img, H3, Information,LinkS, H } from './TechnicalinfoElements';
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
        
          <Left><Img src={base64Image} /></Left>
          <Header>
            <Right>
              <Icons>
                <FcOk style={{ marginRight: '30px', height: '20px', width: '20px' }} onClick={() => { accept(id, cadidatId) ; AcceptTechnEmail(cadidatId)}} />

                <AiFillCloseCircle style={{ color: 'red', marginRight: '30px', height: '20px', width: '20px' }} onClick={() => {refuse(id, cadidatId) ; EmailRefuseTech(cadidatId)}} />
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

/* <LinkS to={{
  pathname: `/${id}/candidate`,
  state: {
    pdfFile: pdfFile,
    letter: letter
  }
}}> 
        </LinkS>
*/
//<Footer><Button onClick={() =>{ accept(id, cadidatId) ; AcceptTechnEmail(cadidatId)}} >ACCEPT</Button><ButtonRed onClick={() =>{refuse(id, cadidatId) ; EmailRefuseTech(cadidatId)}}>Refuse</ButtonRed></Footer>


export default Technicalinfo;
