import { useState } from "react";
import styled from "styled-components";

export function FormSearch(props) {
    const { setSearchCity } = props;

    const [form, setForm] = useState({city:''})
    function updateValuesForm(e){
        const {value, id} = e.target;
        const newValuesForm = {...form, [id]:value}
        setForm(newValuesForm)
    }

    function sendData(e){
        e.preventDefault();
        setSearchCity(form.city)
    }

    return (
        <CsFormSearch
            onSubmit={sendData}
        >
            <button className="buttonForm">Lupinha</button>
            <input 
                type="text" 
                placeholder="Bota a cidade ai"
                id='city'
                value={form['city']}
                onChange={updateValuesForm}
            />

        </CsFormSearch>
    )
}

const CsFormSearch = styled.form`
    width: 100%;
    height: 30px;
    border-radius: 24px;
    background: #EDEDEF;
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

    display: flex;
    justify-content: space-between;

    input{
        width: 80%;
        border-radius: 24px;
        background-color: #EDEDEF;
    }
    
    .buttonForm{
        border: 1px solid red;
        height: 100%;
        border-radius: 24px;
        border: none;
        background-color: #EDEDEF;
    }
`