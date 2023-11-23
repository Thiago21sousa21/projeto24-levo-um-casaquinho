import styled from "styled-components";
import dayjs from "dayjs";
dayjs.locale('pt-br')

export  function Timestamp(){
    const current = dayjs()
    return(
        <CsTimestamp>
            <p>{current.format('DD/MM/YYYY')}</p>
            <p>{current.format('dddd, HH:MM') }</p>
        </CsTimestamp>
    );
}

const CsTimestamp = styled.div`
    text-align: center;
`

