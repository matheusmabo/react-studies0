import React from 'react';
import DashBoard from '../../pages/Dashboard';
import { Container } from './style'


const Content : React.FC = ({children}) => {
    return (
        <>
        <Container>
          <DashBoard> </DashBoard>
        </Container>
        </>
    );
}
export default Content;
