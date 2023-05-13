import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; //useParams hook is used to get the id parameter from the URL
import { Container, Header, Left, FullName, H4, Right, Img, H3, Information, Lowerside, Footer, P, Button, ButtonRed, LinkS } from './CandidateInfoElements';
import { useSelector } from 'react-redux'; //useSelector hook to get the auth state from Redux
const AcceptedInfo = ({ cadidatId, cv, phone, diplome, age, profile, email, name, lastName, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
  const [message, setmessage] = useState('')
  const base64Image = `data:image/jpeg;base64,${profile}`;  // Create a base64 encoded image string from the profile image data
  const { id } = useParams()
  useEffect(() => {  // Use the useEffect hook to fetch the PDF file
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);
  const Info ={pdfFile,letter} // Define an object to hold the PDF file and the cover letter
  const auth = useSelector(state => state.auth) // Access the auth state using the useSelector hook

  return ( // Render the component
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