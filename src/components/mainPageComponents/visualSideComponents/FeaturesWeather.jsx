import styled from "styled-components";

export function FeaturesWeather(props){
    const {humidity, temp_min, temp_max} = props.main;
    const {wind} = props;
    console.log(wind)
    return(
        <CsFeaturesWeather>
            <div className=" box min">{temp_min}</div>
            <div className=" box max">{temp_max}</div>
            <div className=" box umidity">{humidity}</div>
            <div className=" box speed">{wind.speed}</div>
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
    }
`