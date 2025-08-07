import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import KelolaProduk from "./Pages/KelolaProduk";
import LaporanPenjualan from "./Pages/LaporanPenjualan";
import ManajemenPengguna from "./Pages/ManajemenPengguna";
import TransaksiPenjualan from "./Pages/TransaksiPenjualan";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/kelola-produk" element={<KelolaProduk />} />
                    <Route path="/laporan-penjualan" element={<LaporanPenjualan />} />
                    <Route path="/manajemen-pengguna" element={<ManajemenPengguna />} />
                    <Route path="/transaksi-penjualan" element={<TransaksiPenjualan />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
