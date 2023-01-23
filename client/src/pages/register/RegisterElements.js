import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const Background = styled.div`
background-image: url(${({background}) => (background)});

`