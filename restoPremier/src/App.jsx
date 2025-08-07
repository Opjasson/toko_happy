import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stock from "./Pages/Stock";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Stock />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
