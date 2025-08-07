import React from "react";
import MainLayout from "../Components/Templates/MainLayout";

const TransaksiPenjualan = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Transaksi Penjualan</h1>
            <div className="flex justify-between px-16 bg-slate-100 p-5 rounded-xl flex-wrap">
                {/* {historyTransaksi.map((item, index) => ( */}
                <div class="block w-2/5 p-6 rounded-lg shadow-sm  bg-gray-800 border-gray-700 hover:bg-gray-700 hover:cursor-pointer mb-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                        History Transaksi :
                    </h5>

                    <p class="font-normal text-blue-600">
                        Tanggal Pemesanan : 2022-22-2
                    </p>

                    <p class="font-normal text-blue-600">
                        Id Pesanan : 22200022
                    </p>

                    <p class="font-normal text-blue-600">Daftar Pesanan :</p>
                    {/* {item.carts.map((a, index) => ( */}
                    <p className="text-white">
                        {/* {barang.find((b) => b.id === a.menuId)?.nama_menu}{" "} */}
                        Rinso x 3 : 20000
                        {/* {barang.find((b) => b.id === a.menuId)?.harga} */}
                    </p>
                    {/* ))} */}
                    <p class="font-normal text-blue-600">
                        Total Harga : 200000
                    </p>
                </div>
                {/* ))} */}
            </div>
        </MainLayout>
    );
};

export default TransaksiPenjualan;
