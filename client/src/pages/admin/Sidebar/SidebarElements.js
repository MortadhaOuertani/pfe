import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.h2`
  font-size: 24px;
  padding: 16px;
`;

export const SidebarLink = styled(Link)`
  text-decoration:none;
  display: block;
  padding: 12px 16px;
  align-items: center;
 // text-align: center;
  color: ${props => (props.active ? 'white' : '#333')};
  background-color: ${props => (props.active ? '#007bff' : 'transparent')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.active ? '#007bff' : '#e9e9e9')};
  }
`;

