import styled from "styled-components";

export function TodayOrNext({setToggleMap}){
    return(
        <CsTodayOrNext>
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

    .option{
        z-index: 10;
        font-size: 3vw;
        margin-right: 5vw;
        cursor: pointer;
    }
`