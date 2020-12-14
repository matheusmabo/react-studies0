import styled from 'styled-components'

import Switch, {ReactSwitchProps} from 'react-switch';
import ReactSwitch from 'react-switch';
export  const Container = styled.div `
background-color: ${props => props.theme.colors.secoundary};
color: ${props => props.theme.colors.white};
align-items: center;
border-bottom: 1px solid gray;
padding:0 10px;
`;
export const ToggleSelector =  styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })
)<ReactSwitchProps>`
`;
export  const ToggleLabel = styled.span `
text-align: center;
align-content: center;
align-items: center;
color: ${props => props.theme.colors.white};
`;