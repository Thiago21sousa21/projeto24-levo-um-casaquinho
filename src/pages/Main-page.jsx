import styled from "styled-components"
import 
{
  ReserachSide, 
  VisualSide
} 
from '../components/mainPageComponents'


function MainPage() {

  return (
    <CsMainPage>
        <ReserachSide/>
        <VisualSide/>
    </CsMainPage>
  )
}

const CsMainPage = styled.div`
    border: 3px solid red;
    *{
    border: 1px solid black;
    }
    width: 100vw;
    height: 100vh;

    display: flex;

`

export default MainPage
