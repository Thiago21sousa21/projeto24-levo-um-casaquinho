import styled from "styled-components";
import {Title, ResearchAndInformation} from './'

export function ReserachSide (props){
    const {setSearchCity, temp, icon, description, setScale, scale}=props;
    return(
        <CsReseachSide>
            <div className="container">
                <Title/>
                <ResearchAndInformation
                    scale={scale}
                    setScale={setScale}
                    setSearchCity={setSearchCity}
                    temp={temp}
                    icon={icon}
                    description={description}
                />
                <div className="siteInformation">Todos os direitos reservados. 2023.</div>

            </div>
        </CsReseachSide>
    )
}

const CsReseachSide = styled.div`
    width: 30%;
    border: 1px;
    background-color: #FFFFFF;
    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
        position: relative;
        .siteInformation{

        position: absolute;
        left: 0%;
        bottom: 0%;
        }
    }
`