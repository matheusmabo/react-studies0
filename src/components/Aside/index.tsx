
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
                <Logo> <a href = "/"> ClassQuest</a></Logo>           
            </Header>      
            
            <Title> Menu</Title> 
            <MenuContainer>
            <MenuItemLink href = "/DashBoard">home</MenuItemLink>
            <MenuItemLink href = "/Institutions/Schools">Escolas</MenuItemLink>
            <MenuItemLink href = "/Institutions/Teachers">Professores</MenuItemLink>
            <MenuItemLink href = "">Torre sem fim</MenuItemLink>
            <MenuItemLink href = "">Relatórios</MenuItemLink>
            <MenuItemLink href = "">configurações </MenuItemLink>
            </MenuContainer>
           
        </Container>

        </>
    );
}

export default Aside;