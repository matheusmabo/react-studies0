import styled from 'styled-components'



interface ITagProps{
  color: string;
}
export const Container = styled.li`
background-color: ${props => props.theme.colors.tertiary};
list-style: none;

padding: 12px 0;
border-radius: 5px;
margin: 20px 10px;
cursor: pointer;

display: flex;
justify-content: space-between;
align-items:center;
position: relative;

transition: all .3s;


&:hover {
  opacity: 0.7;
  transform: translateX(10px);
}
div {
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}
h3{
  margin: 0px 10px;
}
small {
  margin: 0px 20px;
  font-size: 16px;
}
`;

export const Tag = styled.div<ITagProps>`
position: absolute;
width: 10px;
height: 30px;
background-color: ${props => props.color};
left: 0px;

`;


