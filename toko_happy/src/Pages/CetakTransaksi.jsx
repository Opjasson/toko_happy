import React from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { useNavigate } from "react-router-dom";

const CetakTransaksi = () => {
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

    const navigate = useNavigate()
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
                    <h2 class="text-lg font-bold mt-1">Karis Jaya Shop</h2>
                    <p class="text-gray-600 text-xs">
                        Jl. Dr. Ir. H. Soekarno No.19, Medokan Semampir,
                        Surabaya
                    </p>
                    <p class="text-gray-600 text-xs">No. Telp 0812345678</p>
                    <div class="border border-green-500 text-green-700 font-semibold px-2 py-0.5 mt-1 inline-block text-xs">
                        16413520230802084636
                    </div>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Info Transaksi --> */}
                <div class="text-xs text-gray-700 leading-5">
                    <p>2023-08-02 &nbsp; 08:46:36 &nbsp; karis</p>
                    <p>Sheila &nbsp;-&nbsp; Jl. Diponegoro 1, Sby</p>
                    <p>No.0-3</p>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Daftar Item --> */}
                <div class="space-y-2">
                    <div>
                        <p class="font-medium">1. Indomie Goreng</p>
                        <p class="text-xs text-gray-500">1 lusin x 36,000</p>
                        <div class="flex justify-between">
                            <span></span>
                            <span>Rp 36.000</span>
                        </div>
                    </div>
                    <div>
                        <p class="font-medium">2. Fruit Tea Apple</p>
                        <p class="text-xs text-gray-500">1 500 ml x 7,000</p>
                        <div class="flex justify-between">
                            <span></span>
                            <span>Rp 7.000</span>
                        </div>
                    </div>
                    <div>
                        <p class="font-medium">3. Belfood Sosis Bakar</p>
                        <p class="text-xs text-gray-500">1 x 27,000</p>
                        <div class="flex justify-between">
                            <span></span>
                            <span>Rp 27.000</span>
                        </div>
                    </div>
                </div>

                <div class="border-t border-dashed border-gray-400 my-3"></div>

                {/* <!-- Ringkasan --> */}
                <div class="text-xs text-gray-700">
                    <div class="flex justify-between">
                        <span>Total QTY:</span>
                        <span>14</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Sub Total</span>
                        <span>Rp 70.000</span>
                    </div>
                    <div class="flex justify-between font-bold text-base">
                        <span>Total</span>
                        <span>Rp 70.000</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Bayar (Cash)</span>
                        <span>Rp 70.000</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Kembali</span>
                        <span>Rp 0</span>
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
