import { profile } from 'console';
import React from 'react';
import { Container,
    Profile,
    Welcome,
    UserName } from './style';
const navBarHeader : React.FC = () => {

    return(
  
    <>
    <Container>
    <h1>Header</h1>
    <Welcome> Olá, </Welcome>
    <Profile>
        <UserName>Matheus Mariotto </UserName>
        </Profile>

    </Container>
    </>
    );
}

export default navBarHeader;