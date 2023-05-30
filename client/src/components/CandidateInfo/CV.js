import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, H1, Iframe, LeftSide, RightSide } from './CvElements';

const CV = () => {
    const location = useLocation(); //fournit des informations sur l'emplacement URL actuel de la page
    const state = location.state;
    console.log(state)
    const [pdfFile, setPdfFile] = useState('');
    useEffect(() => {  // Use the useEffect hook to fetch the PDF file
        async function fetchPdf() {
            const { default: file } = await import(`../cvs/${state.cv.data}`);
            setPdfFile(file);
        }
        fetchPdf();
    }, []);
    if (!location.state) {   //si location.state est faux : il renvoie un msg 
        return <div>State is null or undefined</div>;
    }
    //sinon retourne un composent qui affiche un fichier pdf et une lettre 
    return (
        <>
            <Container>
                <LeftSide>
                    <Iframe style={{overflowY:"scroll"}} src={pdfFile} width="100%" height="100%" frameborder="0"></Iframe>{/*to display file type pdf   */}
                </LeftSide>
                <RightSide>
                    <H1> {state.letter}</H1>
                </RightSide>
            </Container>
        </>
    );
};

export default CV;
