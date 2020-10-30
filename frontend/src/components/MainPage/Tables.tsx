import React from "react";
import styled from "styled-components"

const TableStyle = styled.div`
    position: relative;
    top: 1%;
    
    .table-container{
        width: 300px;
        height: 70px;
        background-color: white;
        border-radius: 1rem;
    }
    
`

export default function Table() {
    return (
        <TableStyle>
            <div className="table-container">

            </div>
        </TableStyle>
    )
}