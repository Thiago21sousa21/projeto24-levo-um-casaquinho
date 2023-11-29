import styled from "styled-components";
import {
    InformationResearchSide, 
    FormSearch, 
    Timestamp, 
    ButtonsController
} from './'
import { Oval } from  'react-loader-spinner'


export function ResearchAndInformation(props) {
    const {
        setSearchCity, 
        temp, 
        icon, 
        description, 
        scale, 
        setScale, 
        weatherMain, 
        darkOptions,
        haveData,
        setHaveData
    }=props;


    return (
        <CsResearchAndInformation>
            <FormSearch
                setSearchCity={setSearchCity}
                setHaveData={setHaveData}
            />
            {
                haveData==='NOT_HAS_DATA' ?
                    '' :
                    haveData==='LOADING_DATA' ?
                        <Oval/> :
                            <InformationResearchSide
                                temp={temp}
                                icon={icon}
                                description={description}
                                scale={scale}
                                weatherMain={weatherMain}
                            />   
            }
            
            <CsLine/>
            <Timestamp
                darkOptions={darkOptions}
            />
            <ButtonsController
                setScale={setScale}
                //scale={scale}
                darkOptions={darkOptions}
            />

        </CsResearchAndInformation>
    )
}

const CsResearchAndInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`;

const CsLine = styled.div`
    width: 80%;
    height: 3px;
    border-radius: 3px;
    background: #EDEDED;
    margin: 0 auto 0;
`