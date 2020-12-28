import React from 'react';
import Content from '../Content';
import Aside from '../Aside';
import NavBarHeader from '../navBarHeader';
import {Container } from './style'
const Layout : React.FC = ({children}) => {
    return (
        <>
        <Container>
            <NavBarHeader></NavBarHeader>
            <Aside></Aside>
            <Content>
                {children}        
             </Content>
        </Container>
        </>
    );
}
export default Layout;
