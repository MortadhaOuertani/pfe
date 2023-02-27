import React, { useEffect, useState } from 'react';
import { Container } from './CandidateInfoElements';
const CandidateInfo = ({ cv, email, name, letter }) => {
  const [pdfFile, setPdfFile] = useState('');

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
        <iframe src={pdfFile} width="100%" height="100%"></iframe>
      </Container>
    </>
  );
};

export default CandidateInfo;
