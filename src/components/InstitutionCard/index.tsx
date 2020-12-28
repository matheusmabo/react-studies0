import React from 'react'
import  { 
    Container, 
    Tag } from './style'

interface IInstitutionsProps {
    cardColor: string;
    tagColor: string;
    title: string;
    plan: string;
    teachers: string;
}
const InstitutionCard : React.FC<IInstitutionsProps> = ({
    cardColor, tagColor, title, plan, teachers
}) => {
    return (
        <Container>
            <Tag color = {tagColor}/>
                   <div>
                    <h3> {title}</h3>                
                    <span>{plan}</span>
                    </div>
                    <small>Profs: {teachers}</small>
                    

        </Container>
    );
}
export default InstitutionCard;
