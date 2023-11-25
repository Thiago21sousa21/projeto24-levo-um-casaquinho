import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br')

export  function Timestamp({darkOptions:{darkMode}}){

    const current = dayjs()
    return(
        <CsTimestamp
            $darkMode={darkMode}
        >
            <p>{current.format('DD/MM/YYYY')}</p>
            <p>{current.format('dddd, HH:MM') }</p>
        </CsTimestamp>
    );
}

const CsTimestamp = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    color: ${p => p.$darkMode ? '#ffffff' : '#000000' }

`

