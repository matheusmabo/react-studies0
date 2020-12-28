import React from 'react';
import DashBoard from '../../pages/Dashboard';
import { List } from '../../pages/List';
import { Container } from './style'
import { BrowserRouter } from 'react-router-dom';

const Content : React.FC = ({children}) => {
    return (
        <>
        <Container>
        <BrowserRouter>
         {children}
         </BrowserRouter>
        </Container>
        </>
    );
}
export default Content;
