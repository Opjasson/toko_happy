import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stock from "./Pages/Dashboard";


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
