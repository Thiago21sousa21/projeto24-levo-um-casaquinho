import styled from "styled-components";
import {Title} from '../reserachSideComponents'

export function ReserachSide (){
    return(
        <CsReseachSide>
            <div className="container">
                <Title/>
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