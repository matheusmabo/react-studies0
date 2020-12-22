import React from 'react';
import { Container } from './style';
import Content from '../Content';
import Aside from '../Aside';
import NavBarHeader from '../navBarHeader';

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
