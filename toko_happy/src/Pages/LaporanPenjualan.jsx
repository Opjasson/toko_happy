import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
import axios from "axios";
import { FaBackward } from "react-icons/fa";
import MainLayout from "../Components/Templates/MainLayout";

const LaporanPenjualan = () => {
    const [menu, setMenu] = useState([]);

    const [cart, setCart] = useState([]);
    const [findLower1, setfindLower1] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [findLower2, setfindLower2] = useState(
        new Date().toISOString().split("T")[0]
    );

    const navigate = useNavigate();
    const getCart = async () => {
        try {
            const response = await axios.get("http://localhost:5000/cart");
            const keranjang = await response.data.response;

            setCart(keranjang);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataBarang = async () => {
        try {
            const response = await axios.get("http://localhost:5000/barang");
            const barang = await response.data;

            setMenu(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    useEffect(() => {
        getDataBarang();
    }, []);

    // Penting ----------------
    // Buat map untuk mempermudah pencarian nama berdasarkan barangId
    const barangMap = Object.fromEntries(menu.map((b) => [b.id, b.nama]));

    // Ubah barangId menjadi nama
    const cartDenganNama = cart.map((item) => ({
        createdAt: item.createdAt.split("T")[0],
        qty: item.qty,
        transaksiId: item.transaksiId,
        nama: barangMap[item.barangId],
    }));

    const grouped1 = new Map();

    for (const item of cartDenganNama) {
        const key = `${item.createdAt}_${item.nama}`;

        if (grouped1.has(key)) {
            grouped1.get(key).qty += item.qty;
        } else {
            grouped1.set(key, {
                createdAt: item.createdAt,
                nama: item.nama,
                qty: item.qty,
            });
        }
    }

    const hasilGabungan = Array.from(grouped1.values());

    // Buat map nama_barang => data barang
    const barangMap2 = Object.fromEntries(menu.map((b) => [b.nama, b]));

    // Tambahkan harga ke setiap item transaksi
    const transaksiDenganHarga = hasilGabungan.map((item) => {
        const barangInfo = barangMap2[item.nama] || {};
        return {
            ...item,
            harga_jual: barangInfo.harga_jual || 0,
        };
    });

    // Range tanggal yang dipilih
    const startDate = findLower1;
    const endDate = findLower2;

    // // Filter berdasarkan range
    const filteredData = transaksiDenganHarga.filter((item) => {
        const tgl = item.createdAt;

        return tgl >= startDate && tgl <= endDate;
    });

    const totalPenjualan2 = filteredData.reduce((total, item) => {
        return total + item.harga_jual * item.qty;
    }, 0);
    console.log("Test : ", filteredData);

    // set up print
    const handlePrint = () => {
        const Aside = document.querySelector("aside");
        const Navbar = document.querySelector("header");
        const HeadPage = document.querySelector("#headPage");
        const SetDate = document.querySelector("#setDate");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");

        Aside.setAttribute("hidden", "");
        Navbar.setAttribute("hidden", "");
        SetDate.setAttribute("hidden", "");
        HeadPage.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };
    return (
        <MainLayout>
            <h1 id="headPage" className="text-2xl font-bold">Laporan Penjualan</h1>
            <div
                id="setDate"
                className="flex items-center mx-auto mb-10 border w-[50%] bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm h-fit justify-between">
                <div>
                    <p>dari tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        value={findLower1}
                        onChange={(e) => setfindLower1(e.target.value)}
                    />
                </div>
                <p className="w-32 border"></p>

                <div>
                    <p>sampai tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        value={findLower2}
                        onChange={(e) => setfindLower2(e.target.value)}
                    />
                </div>
            </div>

            <div
                onClick={handlePrint}
                id="printButton"
                className="bg-green-500 justify-center gap-2.5 flex w-1/6 px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                <FaPrint className="text-xl mt-0.5" />
                <p className="text-xl">Print</p>
            </div>

            <div
                id="tombolKembali"
                onClick={() => navigate("/")}
                hidden
                className="bg-green-500 justify-center gap-2.5 flex w-[10%] px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                <FaBackward className="text-xl mt-0.5" />
                <p className="text-xl">Kembali</p>
            </div>

            <div className="mb-48">
                <div className="border-b-2 pb-3 text-center">
                    <h1 className="text-2xl font-bold">
                        Laporan Penjualan Toko Happy Pangkah
                    </h1>
                    <p>Toko Happy | 0823-2494-1099 | happyStore@gmail.com</p>
                    <p>
                        Jl. Ps. Klutuk Pangkah , Kec. Pangkah, Tegal, Jawa
                        Tengah 52471, Indonesia
                    </p>
                </div>

                <div className="my-5">
                  <p>
                      <span className="font-bold">Periode</span> : {findLower1}
                      {" ->"} {findLower2}
                  </p>
                  <p>
                      <span className="font-bold">Jumlah Transaksi</span> :{" "}
                      {filteredData.length}
                  </p>
                  <p>
                      <span className="font-bold">Total Pendapatan</span> : Rp.{" "}
                      {Number(totalPenjualan2).toLocaleString()}
                  </p>
              </div>

                <div className="border relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs border-b-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama Produk
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Penjualan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-black">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.createdAt}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 capitalize py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.nama}
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.qty}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           Rp. {item.harga_jual.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           Rp. {item.harga_jual * item.qty}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <h3 className="text-gray-900 font-bold text-2xl">
                                    Belum Ada Penjualan Bulan Ini
                                </h3>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default LaporanPenjualan;
