import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import KelolaProduk from "./Pages/KelolaProduk";
import LaporanPenjualan from "./Pages/LaporanPenjualan";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/kelola-produk" element={<KelolaProduk />} />
                    <Route path="/laporan-penjualan" element={<LaporanPenjualan />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
