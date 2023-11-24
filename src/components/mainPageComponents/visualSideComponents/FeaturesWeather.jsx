import styled from "styled-components";

export function FeaturesWeather(props) {
    const { wind, scale, main } = props;
    const { humidity, temp_min, temp_max } = main;

    return (
        <CsFeaturesWeather>
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
                {wind.speed}m/s</div>
            <p>Não, você não deve levar um casaquinho!</p>
        </CsFeaturesWeather>
    );
}

const CsFeaturesWeather = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 66.5vw;
    padding-top: 3vw;
    .box{
        width: 27vw;
        height: 9.72vw;
        margin: 0 6vw 3vw 0;
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