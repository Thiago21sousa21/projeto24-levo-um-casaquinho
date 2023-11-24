import styled from "styled-components";
import Switch from 'react-switch';
import { useState } from "react";



export function ButtonsController(props){
    const {setScale, scale} = props

    const [switchAtivo, setSwitchAtivo] = useState(false);

    const handleSwitchChange = (checked) => {
        setSwitchAtivo(checked);
        if(switchAtivo){            
            setScale('CELSIUS')
        }else{
            setScale('FAHRENHEIT')
        }
    };

    return(
        <CsButtonsController>
            <Switch
                checked={switchAtivo}
                onChange={handleSwitchChange}
                //onClick={handleSwitchChange}
            />
        </CsButtonsController>
    )
}

const CsButtonsController= styled.div``