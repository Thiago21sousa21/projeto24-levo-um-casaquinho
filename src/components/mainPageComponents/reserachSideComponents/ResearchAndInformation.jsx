import styled from "styled-components";
import {InformationResearchSide} from '.'

export function ResearchAndInformation() {
    return (
        <CsResearchAndInformation>
            <form action="">
                <button>Lupinha</button>
                <input type="text" placeholder="Bota a cidade ai" />
            </form>
            <InformationResearchSide/>

        </CsResearchAndInformation>
    )
}

const CsResearchAndInformation = styled.div`
  
`