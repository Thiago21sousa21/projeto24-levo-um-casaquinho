import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import dayjs from "dayjs";
dayjs.locale('pt-br')


export  function NextDays({mapData, scale}){
   console.log(mapData.list)
   const celList = []
   const fahList = []
   
    function celsiusAndFahrenheirt(list){
        for( let i =0; i < list.length; i++){
            const temp = list[i].main.temp ;
            const day = dayjs(list[i].dt_txt).format('DD/MM (ddd)');
            const celsius = parseInt(temp - 273.15);
            console.log(celsius)
            const fahrenheit = parseInt(temp * 1.8 - 459.67);

            celList.push({day, temp: celsius});
            fahList.push({day, temp: fahrenheit});
        }
    }
    celsiusAndFahrenheirt(mapData.list)

    return(
        <CsNextDays>
            <LineChart
                width={600} 
                height={300}
                data={scale === 'CELSIUS' ? celList : fahList}
            >
                <Line type="monotone" dataKey="temp" stroke="#8884d8"/>
                <XAxis dataKey="day" />
                <YAxis dataKey="temp"/>
            </LineChart>
        </CsNextDays>
    )
}

const CsNextDays = styled.div`
    width: 60vw;
    height: 24.63vw;
    //background-color: red;

    margin-top: 30px;
`