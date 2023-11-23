import styled from "styled-components";

export function VisualSide(props) {
    const {name, coord}= props;
    return (
        <CsVisualSide>
            <div className="container">
                <div className="TodayOrNext">
                    hoje ou proximo dia
                </div>
                <div className="NameAndLocation">
                    <h1>{name}</h1>
                    <p>{`Lat: ${coord.lat}  Long: ${coord.lon}`}</p>
                </div>
                <div className="SiteInformation">
                    todos os direitos reservado e blah
                </div>
            </div>
        </CsVisualSide>
    )
}

const CsVisualSide = styled.div`
    width: 70%;
    border: 1px;
    background-color: #EFEFEF;


    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
    }
    .NameAndLocation{
        h1{
            color: #222;
            font-family: Poppins;
            font-size: 10vw;
            font-style: normal;
            font-weight: 400;
            //line-height: 48px; /* 32% */
        }
        p{
            color: #222;
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            //line-height: 48px; /* 200% */
        }
    }
`