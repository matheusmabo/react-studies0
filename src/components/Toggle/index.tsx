import React from 'react';
import {
    Container,
    ToggleLabel,
    ToggleSelector
}
     from './style';
const Toggle: React.FC = () => {
    return(
        <>
        <div>
        <ToggleLabel>light </ToggleLabel> 
        <ToggleSelector 
        checked
        uncheckedIcon = {false}
        checkedIcon = {false}
        onChange = {() => console.log("clicado")}/>
        <ToggleLabel> dark</ToggleLabel>
        </div>
        </>
    )
}

export default Toggle;