import styled from "styled-components";

export function TodayOrNext({setToggleMap, toggleMap, darkOptions:{darkMode}}){
    return(
        <CsTodayOrNext
            $toggleMap={toggleMap?'.next':'.today'}
            $darkMode={darkMode}
        >
            <div 
                className="option today"
                onClick={()=>setToggleMap(true)}
            >
                Hoje
            </div>
            
            <div 
                className="option next"
                onClick={()=>setToggleMap(false)}
            >
                Próximos dias
            </div>
        </CsTodayOrNext>
    )
}

const CsTodayOrNext = styled.div`
    display: flex;
    margin-bottom: 30px;
    color: ${p=>p.$darkMode ? '#ffffff' : '#000000'};

    .option{
        z-index: 10;
        font-size: 3vw;
        margin-right: 5vw;
        cursor: pointer;
    }
    ${p=>p.$toggleMap}{
        color: #C8C8C8;
    }
`