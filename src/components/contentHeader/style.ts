import styled from 'styled-components';

interface ITitleContainerProps {
    lineColor: string;
     
}
export const Container = styled.div `
margin-top:25px;
width: 100%;
display: flex;
margin-bottom: 25px;
justify-content: space-between;


`;

export const TitleContainer = styled.div<ITitleContainerProps> `
>h1 {
    color: ${props => props.theme.colors.white };
    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor}
    }
}
`;

export const Controller = styled.div`
display:flex;

button {
    margin: 5px 5px;
}
`;
