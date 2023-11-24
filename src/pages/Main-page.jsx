import styled from "styled-components"
import {VisualSide}from '../components/mainPageComponents/visualSideComponents'
import {ReserachSide}from '../components/mainPageComponents/reserachSideComponents'
import axios from "axios"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';



function MainPage() {
  const [weatherData, setWeatherData] = useState(undefined)
  const [seachCity, setSearchCity] = useState('são paulo')

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}?q=${seachCity}&lang=pt_br&appid=${import.meta.env.VITE_KEY}`)
      .then(r=>{
        console.log(r.data)
        setWeatherData(r.data)
      })
      .catch(e=>{
        Swal.fire({
          title: "Ooops!",
          text: "Something went wrong... 😢"
        })
      })
  },[seachCity])

  if(!weatherData)return 'notFound'

  const {name, coord, main, weather, wind } = weatherData;
  const {temp, temp_max, temp_min, humidity} = main;
  const {icon, description}=weather[0];

  return (
    <CsMainPage>
        <ReserachSide
          setSearchCity={setSearchCity}
          temp={temp}
          icon={icon}
          description={description}
        />
        <VisualSide
          main={main}
          name={name}
          coord={coord}
          wind={wind}
        />
    </CsMainPage>
  )
}

const CsMainPage = styled.div`
    //border: 3px solid red;
    //*{border: 1px solid black}

    width: 100vw;
    height: 100vh;

    display: flex;

`

export default MainPage
