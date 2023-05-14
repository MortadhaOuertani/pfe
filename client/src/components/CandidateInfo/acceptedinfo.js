import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //useParams hook is used to get the id parameter from the URL
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS, H } from './CandidateInfoElements';
import { useSelector } from 'react-redux'; //useSelector hook to get the auth state from Redux
const AcceptedInfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  const { id } = useParams()
  useEffect(() => {  // Use the useEffect hook to fetch the PDF file
    async function fetchPdf() {
      const { default: file } = await import(`../cvs/${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);
  const [img, setImg] = useState(null);
  async function fetchImg(profile) {
    const { default: file } = await import(`../../ProfilePictures/${profile}`);
    setImg(file)
  }
  useEffect(() => {
    fetchImg(profile);
  }, [profile]);
  const Info = { pdfFile, letter } // Define an object to hold the PDF file and the cover letter
  const auth = useSelector(state => state.auth) // Access the auth state using the useSelector hook

  return ( // Render the component
    <>
      <Container>

        <Left to={`/Profile/${cadidatId}`}><Img src={img} /></Left>
        <Header>
          <Right>
            <FullName><H>{name} {lastName}</H>
            </FullName>
            <Information><H3>Email : {email}</H3><H3>Phone : {phone}</H3><H3>Diploma : {diplome}</H3><H3>Age : {age} years old</H3></Information>

          </Right>
        </Header>


      </Container>
    </>
  );
};

export default AcceptedInfo;