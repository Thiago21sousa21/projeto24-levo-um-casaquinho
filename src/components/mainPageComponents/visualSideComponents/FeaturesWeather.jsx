import styled from "styled-components";

export function FeaturesWeather(props) {
    const { wind, scale, main, darkOptions:{darkMode} } = props;
    const { humidity, temp_min, temp_max, temp } = main;
    const temSuggestion = 290.15
    
    return (
        <CsFeaturesWeather
            $darkMode={darkMode}
        >
            <div className=" box min">
                <p>Mínima</p>
                {
                    scale === 'CELSIUS' ?
                        `${parseInt(temp_min - 273.15)} °C` :
                        `${parseInt(temp_min * 1.8 - 459.67)} °F`
                }
            </div>
            <div className=" box max">
                <p>Máxima</p>
                {
                    scale === 'CELSIUS' ?
                        `${parseInt(temp_max - 273.15)} °C` :
                        `${parseInt(temp_max * 1.8 - 459.67)} °F`
                }
            </div>
            <div className=" box umidity">
                <p>Umidade</p>
                {humidity}%</div>
            <div className=" box speed">
                <p>Velocidade do vento</p>
                {wind.speed}m/s
            </div>
            {
                temp_max < temSuggestion ||
                temp_min < temSuggestion ||
                temp < temSuggestion
                ?
                    <p>Sim, você deve levar um casaquinho!</p>

                :
                    <p>Não, você não deve levar um casaquinho!</p>
            }
           
        </CsFeaturesWeather>
    );
}

const CsFeaturesWeather = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 66.5vw;
    padding-top: 3vw;
    margin-bottom: 40px;


    p{
        color: ${p=> p.$darkMode ? '#fff' : '#222'};
    }

    .box{
        width: 23vw;
        height: 8vw;
        margin: 0 4vw 3vw 0;
        background-color: #4D4494;
        border-radius: 32px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 25px;

        color: #fff;
        font-size: 3vw;

        p{
            color: #fff;
            font-size: 1.5vw;
        }
    }
`