import { profile } from 'console';
import React from 'react';
import { Container,
    Profile,
    Welcome,
    UserName } from './style';
import Toggle from '../Toggle';
const navBarHeader : React.FC = () => {
    return(
    <>
    <Container>
        
        <Toggle></Toggle>
    <Profile>
    <Welcome> Olá, </Welcome>
    <UserName>Matheus Mariotto</UserName>
    </Profile>
     
      
        
    </Container>
    </>
    );
}

export default navBarHeader;