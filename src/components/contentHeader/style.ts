import styled from 'styled-components';


export const Container = styled.div `
width: 100%;
display: flex;
margin-bottom: 25px;
justify-content: space-between;


`;

export const TitleContainer = styled.div `
>h1 {
    color: ${props => props.theme.colors.white };
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning}
    }
}
`;

export const Controller = styled.div`
display:flex;
background-color:red;


button {
    margin: 5px 5px;
}
`;
