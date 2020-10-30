import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import TableContextProvider from "./components/context/TableContext";

function App() {
    return (
        <div className="App">
            <TableContextProvider>
                <GlobalStyle/>
                <MainPage/>
            </TableContextProvider>
        </div>
    );
}

export default App;
