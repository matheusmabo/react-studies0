import styled from 'styled-components'
import MdDashboard   from 'react-icons'
export  const Container = styled.div `
grid-area: AS;
background-color: ${props => props.theme.colors.secoundary};
padding-left: 20px;
border-right: 1px solid ${props => props.theme.colors.gray};

`;
export  const Logo = styled.div `
font-family: Arial, Helvetica, sans-serif; 
padding: 20 px;
font-size: 32px;
color: ${props => props.theme.colors.white};
text-transform: uppercase;
font-weight: lighter;
`;
export const Title = styled.h3`
margin-left:25px;
margin-top: 15px`;

export const MenuContainer = styled.div`
margin-left: 25px;
margin-top: 50px;
display:flex;
flex-direction: column;
`;


export const Header = styled.div`
margin-top: 75px;
`;

export const MenuItemLink = styled.a`
text-decoration: none;
 color: ${props => props.theme.colors.info};
margin: 10px 0px;

 &:hover {
    opacity: 0.7;
    transition: opacity 1s;
 }
`;
