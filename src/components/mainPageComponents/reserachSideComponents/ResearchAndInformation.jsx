import styled from "styled-components";
import {InformationResearchSide, FormSearch} from '.'


export function ResearchAndInformation(props) {
    const {setSearchCity, temp, icon, description}=props;

    return (
        <CsResearchAndInformation>
            <FormSearch
                setSearchCity={setSearchCity}
            />
            <InformationResearchSide
                temp={temp}
                icon={icon}
                description={description}
            />
            <CsLine/>

        </CsResearchAndInformation>
    )
}

const CsResearchAndInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CsLine = styled.div`
    width: 80%;
    height: 1px;
    background: #EDEDED;
    margin: 0 auto 0;
`