import styled from "styled-components";

export function VisualSide() {
    return (
        <CsVisualSide>
            <div className="container">
                <div className="TodayOrNext">
                    hoje ou proximo dia
                </div>
                <div className="NameAndLocation">
                    <h1>Nome da cidade</h1>
                    <p>coordenadas</p>
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

    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
    }
    .NameAndLocation{
        h1{
            color: #222;
            font-family: Poppins;
            font-size: 60px;
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