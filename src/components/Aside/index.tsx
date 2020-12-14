
import React, { Component } from 'react';

import { Container,
Logo,
Title,
Header,
MenuItemLink,
MenuContainer } from "./style";

const Aside: React.FC = () => {
    return (
        <>
        <Container>
            <Header>
                <Logo>Improva</Logo>           
            </Header>      
            
            <Title> Menu</Title> 
            <MenuContainer>
            <MenuItemLink href = "">histórico</MenuItemLink>
            <MenuItemLink href = "">meus cards</MenuItemLink>
            <MenuItemLink href = "">meus treinos</MenuItemLink>
            <MenuItemLink href = "">configurações </MenuItemLink>
            </MenuContainer>
           
        </Container>

        </>
    );
}

export default Aside;