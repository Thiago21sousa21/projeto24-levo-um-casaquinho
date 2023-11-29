import styled from "styled-components"
import {VisualSide}from '../components/mainPageComponents/visualSideComponents'
import {ReserachSide}from '../components/mainPageComponents/reserachSideComponents'
import axios from "axios"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';



function MainPage() {
  const [weatherData, setWeatherData] = useState(undefined)
  const [mapData, setMapData] = useState(undefined)
  const [seachCity, setSearchCity] = useState('são paulo')
  const [scale, setScale]= useState('CELSIUS')
  const [darkMode, setDarkMode] = useState(false);
  const darkOptions = {darkMode, setDarkMode}
  const [haveData, setHaveData] = useState(false);


  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}/weather?q=${seachCity}&lang=pt_br&appid=${import.meta.env.VITE_KEY}`)
      .then(r=>{
        //console.log(r.data)
        setWeatherData(r.data)
        return axios.get(`${import.meta.env.VITE_BASE_URL}/forecast?q=${seachCity}&lang=pt_br&appid=${import.meta.env.VITE_KEY}`)
      })  
      .then(r=>{
        //console.log(r.data)
        setMapData(r.data)
        setHaveData(true);

      })
      .catch(e=>{
        Swal.fire({
          title: "Ooops!",
          text: "Something went wrong... 😢"
        })
      })
  },[seachCity])

  const {name, coord, main = {}, weather = [], wind } = weatherData ?? {};
  const {temp} = main ?? {};
  const {icon, description}=weather[0] ?? {} ;

  return (
    <CsMainPage>
        <ReserachSide
          scale={scale}
          setScale={setScale}
          setSearchCity={setSearchCity}
          temp={temp}
          icon={icon}
          description={description}
          weatherMain = {weather[0] && weather[0].main}
          darkOptions={darkOptions}
          haveData={haveData}
        />
        <VisualSide
          mapData={mapData}
          scale={scale}
          main={main}
          name={name}
          coord={coord}
          wind={wind}
          darkOptions={darkOptions}
          haveData={haveData}
        />
    </CsMainPage>
  )
}

const CsMainPage = styled.div`
    //border: 3px solid red;
    
    width: 100vw;
    height: 100vh;
    
    display: flex;
    
    @media (max-width: 991px) {
     // *{border: 1px solid black}
      flex-direction: column;
    }

`

export default MainPage
