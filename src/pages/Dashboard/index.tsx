import React from 'react';
import { Container } from './style';
import ContentHeader  from '../../components/contentHeader';
import SelectInput  from '../../components/SelectInput';
import Content from '../../components/Content'

const Admins = [
        {value: 'matheus', label: "Matheus"},
        {value: 'Amanda', label: 'Amanda'}
]
const test = [
        {value: 'matheus', label: "Matheus"},
        {value: 'Amanda', label: 'Amanda'}
]
const DashBoard : React.FC  = () => {
    return (
        <Container>
            <ContentHeader title = "DashBoard" lineColor = "#F7931B">
                <SelectInput options = {Admins}></SelectInput>
                </ContentHeader>
           
       
       </Container>
    );
}
export default DashBoard;