import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftSide, RightSide } from './CvElements';

const CV = () => {
    const location = useLocation();
    const { letter, pdfFile } = location.state;


    useEffect(() => {
        console.log(letter)
    }, [letter])
    return (
        <>
            <Container>
                <LeftSide>
                    <iframe src={pdfFile} width="100%" height="100%" frameborder="0"></iframe>{/*to display file type pdf   */}
                </LeftSide>
                <RightSide>
                    <h1> {letter}</h1>
                </RightSide>
            </Container>
        </>
    );
};

export default CV;
