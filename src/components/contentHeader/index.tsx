import React, { Fragment } from 'react' ;
import { Title } from '../Aside/style';
import  { Container,
    TitleContainer,
    Controller }  from './style';
import SelectInput from '../SelectInput';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader : React.FC <IContentHeaderProps> = ({
title, lineColor, children,
}) => {

 
return (
    <>
    <Container >
    <TitleContainer lineColor = {lineColor}>
        <h1>{title}</h1>
    </TitleContainer>

    <Controller>
        {children}
    </Controller>
    </Container>
    </>
);
}

export default ContentHeader;