import React from "react";
import styled from "styled-components";

const MainPageStyle = styled.div`
    
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    
    .input {
        width: 20%;
        height: 3%;
    }
`

export default function MainPage() {
    return (
        <MainPageStyle>
            <input className="input" type="text"/>
        </MainPageStyle>
    )
}