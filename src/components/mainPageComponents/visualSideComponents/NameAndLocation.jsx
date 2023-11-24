import styled from "styled-components";

export function NameAndLocation(props){
    const {name, coord}= props;
    return(
        <CsNameAndLocation>
            <h1>{name}</h1>
            <p>{`Lat: ${coord.lat}  Long: ${coord.lon}`}</p>
        </CsNameAndLocation>
    )
}

const CsNameAndLocation = styled.div`
    h1{
        color: #222;
        font-family: Poppins;
        font-size: 10vw;
        //font-style: normal;
        font-weight: 400;
        //line-height: 48px; /* 32% */
                
    }
    p{
        color: #222;
        font-family: Poppins;
        font-size: 1vw;
        //font-style: normal;
        font-weight: 400;
        //line-height: 48px; /* 200% */
    }
`