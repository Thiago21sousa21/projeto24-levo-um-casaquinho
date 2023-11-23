import styled from "styled-components"
import {VisualSide}from '../components/mainPageComponents/visualSideComponents'
import {ReserachSide}from '../components/mainPageComponents/reserachSideComponents'
import axios from "axios"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';



function MainPage() {
  const [weatherData, setWeatherData] = useState(undefined)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}?q=teresina&appid=${import.meta.env.VITE_KEY}`)
      .then(r=>{
        console.log(r.data)
      })
      .catch(e=>{
        Swal.fire({
          title: "Ooops!",
          text: "Something went wrong... 😢"
        })
      })
  },[])

  return (
    <CsMainPage>
        <ReserachSide/>
        <VisualSide/>
    </CsMainPage>
  )
}

const CsMainPage = styled.div`
    border: 3px solid red;
    *{border: 1px solid black}

    width: 100vw;
    height: 100vh;

    display: flex;

`

export default MainPage
