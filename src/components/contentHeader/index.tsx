import React, { Fragment } from 'react' ;
import { Title } from '../Aside/style';
import  { Container }  from './style'; 
import {TitleContainer} from './style';
import {Controller} from './style';

const ContentHeader : React.FC = ({children}) => {
return (
    <>
    <Container>
    <TitleContainer>
        <h1>TitleContainer</h1>
   
    </TitleContainer>
    <Controller>
    <button>Butão</button>
    </Controller>
    </Container>
    </>
);
}

export default ContentHeader;