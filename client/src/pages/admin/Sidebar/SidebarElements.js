import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #e5f3ff;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.h2`
 margin-top: 10%;
  font-size: 24px;
  padding: 16px;
`;

export const Div = styled.div`
 display: flex;
 flex-direction: column;
`;
export const SidebarLink = styled(Link)`
  text-decoration:none;
  display: block;
  padding: 12px 16px;
  align-items: center;
 // text-align: center;
  color: ${props => (props.active ? 'black' : 'black')};
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.active ? 'white' : '#e9e9e9')};
  }
`;

