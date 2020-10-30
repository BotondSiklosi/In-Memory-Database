import React, {useContext} from "react";
import styled from "styled-components";
import Table from "./Tables";
import {TableContext} from "../context/TableContext";

const MainPageStyle = styled.div`
    
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .input {
        width: 25%;
        height: 4%;
        border-radius: 2rem;
    }
`

export default function MainPage() {

    const {input, setInput} = useContext(TableContext);

    return (
        <MainPageStyle>
            <input className="input" type="text"/>
            <Table/>
        </MainPageStyle>
    )
}