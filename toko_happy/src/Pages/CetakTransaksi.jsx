import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CetakTransaksi = () => {
    const { id } = useParams();
    const [transaksi, setTransaksi] = useState();
    const [transaksiFull, setTransaksiFull] = useState();
    const [qtyAll, setQtyAll] = useState();

    const [barang, setBarang] = useState();
    // set up print
    const handlePrint = () => {
        const Aside = document.querySelector("aside");
        const Navbar = document.querySelector("header");
        const HeadPage = document.querySelector("#headPage");
        const PrintButton = document.querySelector("#printButton");
        const TombolKembali = document.querySelector("#tombolKembali");

        Aside.setAttribute("hidden", "");
        Navbar.setAttribute("hidden", "");
        HeadPage.setAttribute("hidden", "");
        PrintButton.setAttribute("hidden", "");
        window.print();
        TombolKembali.removeAttribute("hidden");
    };

    const navigate = useNavigate();

    const getDataTransaksi = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/transaksi/${id}`
            );
            console.log(response.data);
            setTransaksi(response.data.carts);
            setTransaksiFull(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataTransaksi();
    }, [id]);

    const getDataBarang = async () => {
        try {
            const response = await fetch("http://localhost:5000/barang");
            const barang = await response.json();
            console.log(barang);

            setBarang(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataBarang();
    }, []);

    return (
        <MainLayout>
            <h1 id="headPage" className="text-2xl font-bold">
                Cetak Nota
            </h1>

            <button
                onClick={handlePrint}
                id="printButton"
                className={`bg-yellow-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-yellow-500`}>
                + Cetak Sekarang
            </button>

            <button
                onClick={() => navigate("/transaksi-penjualan")}
                hidden
                id="tombolKembali"
                className={`bg-yellow-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-yellow-500`}>
                {"<-"} Back
            </button>

            <div class="bg-white w-[350px] p-5 shadow-md text-sm">
                {/* <!-- Logo & Nama Toko --> */}
                <div class="text-center">
                    <div class="text-4xl">🏪</div>
                    <h2 class="text-lg font-bold mt-1">Happy Meubel</h2>
                    <p class="text-gray-600 text-xs">
                        Jl. Ps. Klutuk Pangkah , Kec. Pangkah, Tegal, Jawa
                        Tengah 52471, Indonesia
                    </p>
                    <p class="text-gray-600 text-xs">No. Telp 0812345678</p>
                    <div class="border border-green-500 text-green-700 font-semibold px-2 py-0.5 mt-1 inline-block text-xs">
                        16413520230802084636
                    </div>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Info Transaksi --> */}
                <div class="text-xs text-gray-700 leading-5">
                    <p>{transaksiFull?.createdAt} &nbsp; Kasir</p>
                    <p>No.xxx</p>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Daftar Item --> */}
                <div class="space-y-2">
                    {transaksi?.map((item, index) => (
                        <div key={index}>
                            <p class="font-medium capitalize">
                                {" "}
                                {
                                    barang?.find((b) => b.id === item?.barangId)
                                        ?.nama
                                }
                            </p>
                            <p class="text-xs text-gray-500">
                                {item.qty} x Rp.{" "}
                                {
                                    barang?.find((b) => b.id === item?.barangId)
                                        ?.harga_jual
                                }
                            </p>
                            <div class="flex justify-between">
                                <span></span>
                                <span>
                                    Rp{" "}
                                    {(
                                        barang?.find(
                                            (b) => b.id === item?.barangId
                                        )?.harga_jual * item.qty
                                    ).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Ringkasan --> */}
                <div class="text-xs text-gray-700">
                    <div class="flex justify-between">
                        <span>Total QTY:</span>
                        <span>
                            {transaksi?.reduce((total, item) => {
                                return total + item.qty;
                            }, 0)}
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>Sub Total</span>
                        <span>
                            Rp {transaksiFull?.totalHarga.toLocaleString()}
                        </span>
                    </div>
                    <div class="flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>
                            Rp {transaksiFull?.totalHarga.toLocaleString()}
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>Bayar (Cash)</span>
                        <span>
                            Rp {transaksiFull?.bayarPelanggan.toLocaleString()}
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>Kembali</span>
                        <span>
                            Rp{" "}
                            {(
                                transaksiFull?.bayarPelanggan -
                                transaksiFull?.totalHarga
                            ).toLocaleString()}
                        </span>
                    </div>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Footer --> */}
                <div class="text-center text-xs text-gray-700">
                    <p>Terimakasih Telah Berbelanja</p>
                    <p class="mt-1">Link Kritik dan Saran:</p>
                    <p class="text-gray-400">com/e-receipt/S-00D39U-07G344G</p>
                </div>
            </div>
        </MainLayout>
    );
};

export default CetakTransaksi;
