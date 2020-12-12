import styled from 'styled-components'

export  const Container = styled.div `
/*
Layout
HD = header;
AS = aside;
CT = Content;
*/
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 80px auto;

    grid-template-areas: 
    'AS MH'
    'AS CT';

    height: 100vh;`;