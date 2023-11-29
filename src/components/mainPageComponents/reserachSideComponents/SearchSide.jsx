import styled from "styled-components";
import {Title, ResearchAndInformation} from './'

export function ReserachSide (props){
    const {setSearchCity, temp, 
        icon, description, setScale, 
        scale, weatherMain, darkOptions,
        haveData, setHaveData
    }=props;
    const darkMode = darkOptions.darkMode;
    return(
        <CsReseachSide
            $darkMode={darkMode}
        >
            <div className="container">
                <Title
                    darkOptions={darkOptions}
                />
                <ResearchAndInformation
                    scale={scale}
                    setScale={setScale}
                    setSearchCity={setSearchCity}
                    temp={temp}
                    icon={icon}
                    description={description}
                    weatherMain={weatherMain}
                    darkOptions={darkOptions}
                    haveData={haveData}
                    setHaveData={setHaveData}
                />
                <div className="siteInformation">Todos os direitos reservados. 2023.</div>

            </div>
        </CsReseachSide>
    )
}

const CsReseachSide = styled.div`
    width: 30%;
    border: 1px;
    background-color: ${p => p.$darkMode ? '#000000' : '#FFFFFF'};
    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
        position: relative;
        .siteInformation{
            color: ${p => p.$darkMode ? '#ffffff' : '#000000' };

            position: absolute;
            left: 0%;
            bottom: 0%;
        }
    }

    @media (max-width: 991px) {
        width: 100%;
        //border: 1px solid red
    }
`