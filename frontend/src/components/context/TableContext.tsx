import React, {createContext, useState} from "react";

export const TableContext = createContext();

function TableContextProvider(props) {
    const [input, seInput] = useState("");

    return (
        <TableContext.Provider value={{input, seInput}}>
            {props.children}
        </TableContext.Provider>
    )
}

export default TableContextProvider;