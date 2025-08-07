import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import KelolaProduk from "./Pages/KelolaProduk";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/kelola-produk" element={<KelolaProduk />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
