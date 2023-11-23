import { useState } from "react";
import styled from "styled-components";

export function InformationResearchSide(props) {
    const [scale, setScale]= useState('CELSIUS')

    const {temp, icon, description}=props
    return (
        <CsInformationResearchSide>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} width="50px" height="50px" alt=""></img>
            {
                scale === 'CELSIUS' ?
                `${parseInt(temp-273.15)} °C` :
                `${parseInt(temp *  1.8 - 459.67)} °F`
            }
            <p>{description}</p>
        </CsInformationResearchSide>
    )
}

const CsInformationResearchSide = styled.div`
  text-align: center;
  font-size: 5vw;

  p{
    color: #222;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
  }
`