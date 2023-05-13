import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Iframe, LeftSide, RightSide } from './CvElements';

const CV = () => {
    const location = useLocation(); //fournit des informations sur l'emplacement URL actuel de la page
    const Info = location.state || {}; 

      if (!location.state) {   //si location.state est faux : il renvoie un msg 
        return <div>State is null or undefined</div>;
    }
    //sinon retourne un composent qui affiche un fichier pdf et une lettre 
    return (
        <>
            <Container>
                <LeftSide>
                    <Iframe src={Info.pdfFile} width="100%" height="100%" frameborder="0"></Iframe>{/*to display file type pdf   */}
                </LeftSide>
                <RightSide>
                    <h1> {Info.letter}</h1>
                </RightSide>
            </Container>
        </>
    );
};

export default CV;
