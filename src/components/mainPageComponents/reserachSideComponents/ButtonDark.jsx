import styled from "styled-components";
import Switch from 'react-switch';
import { useState } from "react";



export function ButtonDark({darkOptions:{darkMode, setDarkMode}}){


    const handleChange = (checked) => {
        setDarkMode(checked);
    };
  

    return(
        <CsButtonDark
            $darkMode={darkMode}
        >
            <Switch
                checked={darkMode}
                onChange={handleChange}
            />
            <p>Dark Mode</p>
        </CsButtonDark>
    )
}

const CsButtonDark= styled.div`
    display: flex;
    align-items: center;
        p{  
            margin-left: 20px;
            color: ${p=> p.$darkMode ? '#fff' : '#000' };
        }
`