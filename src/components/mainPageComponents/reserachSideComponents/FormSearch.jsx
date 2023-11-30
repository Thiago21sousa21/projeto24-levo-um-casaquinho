import { useState } from "react";
import styled from "styled-components";

export function FormSearch(props) {
    const { setSearchCity, setHaveData, seachCity } = props;

    const [form, setForm] = useState({city:''})
    function updateValuesForm(e){
        const {value, id} = e.target;
        const newValuesForm = {...form, [id]:value}
        setForm(newValuesForm)
    }

    function sendData(e){
        e.preventDefault();
        const newForm = {...form};
        if(newForm.city!== seachCity && newForm.city){
            setHaveData('LOADING_DATA');            
            setSearchCity(form.city)   
        }     
    }

    return (
        <CsFormSearch
            onSubmit={sendData}
        >
            <button className="buttonForm">
            <ion-icon name="search-outline"></ion-icon>
            </button>
            <CsInput 
                type="text" 
                placeholder="Procure por uma cidade"
                id='city'
                value={form['city']}
                onChange={updateValuesForm}
            />

        </CsFormSearch>
    )
}

const CsFormSearch = styled.form`
    width: 100%;
    height: 40px;
    border-radius: 24px;
    background: #EDEDEF;
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);

    margin-bottom: 40px;

    display: flex;
    padding-left: 20px;
    
    .buttonForm{
        border: none;
        height: 100%;
        border-radius: 24px;
        background-color: #EDEDEF;
        cursor: pointer;
    }
`

const CsInput = styled.input`
    width: 90%;
    border-radius: 24px;
    background-color: #EDEDEF;
    border: #EDEDEF;
    outline: 0;

`