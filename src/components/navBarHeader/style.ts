import styled from 'styled-components'

export  const Container = styled.div `
grid-area: MH;
background-color: ${props => props.theme.colors.secoundary};

margin-bottom: 1px solid ${props => props.theme.colors.gray};
color: ${props => props.theme.colors.white};
display: flex;
align-items: center;
padding: 0 10px;
border-bottom: 1px solid gray;
justify-content: space-between;

`;


export const Profile = styled.div `

display: block;
color: ${props => props.theme.colors.white};
text-align: left;
padding:0 25px;

`;
export const Welcome = styled.h3 `
`;
export const UserName = styled.span `

`;
