import React, { useEffect, useState } from 'react';
import { Container } from './CandidateInfoElements';
const CandidateInfo = ({ cv, email, name, letter }) => {
  const [pdfFile, setPdfFile] = useState('');
// <iframe src={pdfFile} width="100%" height="100%"></iframe>{/*to display file type pdf   */ }

  useEffect(() => {
    console.log(cv.data)
    async function fetchPdf() {
      const { default: file } = await import(`./${cv.data}`);
      setPdfFile(file);
    }
    fetchPdf();
  }, [name]);

  return (
    <>
      <Container>
      </Container>
    </>
  );
};

export default CandidateInfo;
