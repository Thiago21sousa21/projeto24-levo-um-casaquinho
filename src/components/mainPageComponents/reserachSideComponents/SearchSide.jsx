import styled from "styled-components";
import {Title, ResearchAndInformation} from './'

export function ReserachSide (){
    return(
        <CsReseachSide>
            <div className="container">
                <Title/>
                <ResearchAndInformation/>
            </div>
        </CsReseachSide>
    )
}

const CsReseachSide = styled.div`
    width: 30%;
    border: 1px;

    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
    }
`