import styled from 'styled-components'

export const Container = styled.div`
`;
export const Content = styled.div`

`;
export const Filters = styled.div`
width:100%;
display:flex;
justify-content: center;
  .tag-filter {
    font-size: 18px;
    font-weight:500;
    background:none;
    color: ${props => props.theme.colors.white};
    margin: 0px 10px;   
    transition: 0.3s;

    :hover {
      opacity: 0.5;

    }
    ::after {
      padding: 5px;
      content: '';
      display: block;
      width: 55px;
      margin: 0 auto;
     
    }
  }
  .tag-filter-free {
    border-bottom: 10px solid ${props => props.theme.colors.sucess}
    
  }

  .tag-filter-paid {
    border-bottom: 10px solid ${props => props.theme.colors.warning}
  }

`;