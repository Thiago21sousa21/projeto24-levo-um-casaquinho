import styled from "styled-components";
import { FeaturesWeather, TodayOrNext, NameAndLocation } from "./";

export function VisualSide(props) {
    const {name, coord, main, wind}= props;
    return (
        <CsVisualSide>
            <div className="container">
                <TodayOrNext/>
                <NameAndLocation
                    name={name}
                    coord={coord}
                />
                <FeaturesWeather 
                    main={main}
                    wind={wind}
                />
                <div className="siteInformation">todos os direitos reservado e blah</div>
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
        position: relative;

        .siteInformation{

            position: absolute;
            left: 0%;
            bottom: 0%;
        }

    }
    
`