import styled from "styled-components";
import casaco from '../../../assets/casaco.svg'

export function Title (){
    return(
        <CsTitle>
            <img src={casaco} alt="" />
           <h1>Levo um casaquinho?</h1>
        </CsTitle>
    )
}

const CsTitle = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 21.82%;
        //height: 120px;
    }
    h1{
    color: #222;
    font-family: Poppins;
    font-size: calc(15px + 1.9vw);
    font-weight: 600;
    //line-height: 48px;
    }
`