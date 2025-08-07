import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/kelola-produk" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
