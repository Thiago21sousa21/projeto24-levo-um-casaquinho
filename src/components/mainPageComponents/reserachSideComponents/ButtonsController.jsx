import styled from "styled-components";
import Switch from 'react-switch';
import { useState } from "react";
import { ButtonDark } from "./";



export function ButtonsController(props) {
    const { setScale, scale, darkOptions } = props;

    const darkMode = darkOptions.darkMode;
    const [switchAtivo, setSwitchAtivo] = useState(false);

    const handleSwitchChange = (checked) => {
        setSwitchAtivo(checked);
        if (switchAtivo) {
            setScale('CELSIUS')
        } else {
            setScale('FAHRENHEIT')
        }
    };

    return (
        <CsButtonsController
            $darkMode={darkMode}
        >
            <div className="molde">
                <Switch
                    checked={switchAtivo}
                    onChange={handleSwitchChange}
                />
                <p> °F</p>
            </div>

            <ButtonDark
                darkOptions={darkOptions}
            />
        </CsButtonsController>
    )
}

const CsButtonsController = styled.div`
    .molde{
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        p{  
            margin-left: 20px;
            color: ${p=> p.$darkMode ? '#fff' : '#000' };
        }
    }

`