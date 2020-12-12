import React from 'react';
import { Container } from './style';
import Content from '../Content';
import Aside from '../Aside';
import NavBarHeader from '../navBarHeader';

const Layout : React.FC = () => {
    return (
        <>
        <Container>

            <NavBarHeader></NavBarHeader>
            <Aside></Aside>
            <Content> </Content>
        </Container>
        </>
    );
}
export default Layout;
