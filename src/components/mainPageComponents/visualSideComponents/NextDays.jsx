import styled from "styled-components"
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br')


export  function NextDays({mapData, scale}){
   //console.log(mapData.list)
   const celList = []
   const fahList = []
   
    function celsiusAndFahrenheirt(list){
        for( let i =0; i < list.length; i++){
            const temp = list[i].main.temp ;
            const day = dayjs(list[i].dt_txt).format('DD/MM (ddd)');
            const celsius = parseInt(temp - 273.15);
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
                className="mapa"
                data={scale === 'CELSIUS' ? celList : fahList}
            >
                <Line type="monotone" dataKey="temp" stroke="#8884d8"/>
                <XAxis dataKey="day" />
                <YAxis 
                    dataKey="temp"
                    tickFormatter={(v)=>`${v}°${scale === 'CELSIUS' ? 'C' : 'F'}`}
                />
            </LineChart>
        </CsNextDays>
    )
}

const CsNextDays = styled.div`
    width: 60%;
    height: 24.63%;
    margin-top: 30px;
    margin-bottom: 40px;

`