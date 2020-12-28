import React, { useMemo } from 'react'
import {Container, Content, Filters} from './style'
import ContentHeader  from '../../components/contentHeader'
import SelectInput from '../../components/SelectInput'
import InstitutionCard from '../../components/InstitutionCard'
import { match } from 'react-router-dom'
interface IRouterParams {
    match: {
        params: {
            type: string
        }
    }
}
export const List : React.FC <IRouterParams> =  ({ match }) => {
    const institutionsTypes = [
        {value: 1, label: "Escolas"},
        {value: 0, label: "Professores"}
    ]
    const institutionsPlans = [
        {value: 0, label: "gratis"},
        {value: 1, label: "pagas"}
    ]
    const {type} = match.params
    const pageDetail = useMemo(() => {
        return type === 'Teachers' ? {
            title: "Professores",
            lineColor: "#F7931B"
        }: {
            title: "Escolas",
            lineColor: "#E44C4E"
        };
    }, [type]);
    
    return (
        <>
        <ContentHeader title = { pageDetail.title } lineColor = {pageDetail.lineColor}>
            <SelectInput options = {institutionsTypes}></SelectInput>
        </ContentHeader>
        <Filters> 
        <button 
            type = "button"
            className = "tag-filter tag-filter-free">
                Free
            </button><button 
            type = "button"
            className = "tag-filter tag-filter-paid">
                Paid
            </button>
        </Filters>
        <Content>
        <InstitutionCard  cardColor = "#313862"   
            tagColor = "#E44C4E"
            title = "Marista"
            plan = "paid"
            teachers = "50"
            />
           
            
        </Content>
        </>
    );
}
