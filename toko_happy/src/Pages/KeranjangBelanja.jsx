import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";

const KeranjangBelanja = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [barang, setBarang] = useState([]);

    const getTransaksiReady = async () => {
        try {
            const transaksi = await axios.get(
                "http://localhost:5000/transaksi"
            );
            // console.log(transaksi.data.response);
            const cekTransNullBayar = transaksi.data.response.filter(
                (item) => item.bayarPelanggan === 0
            );
            setFilteredData(cekTransNullBayar);
            console.log("cek", cekTransNullBayar);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getTransaksiReady();
    }, []);

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

    const getTotalHarga = async () => {
        try {
            
        } catch (error) {
            
        }
    };

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
            <button className="bg-green-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-green-500">
                + Tambah Produk
            </button>
            <div className="border relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border-b-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
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
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData[0].carts.map((item, index) => (
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
                                        {
                                            barang.find(
                                                (b) => b.id === item.barangId
                                            )?.nama
                                        }
                                    </th>

                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.qty}
                                    </td>

                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Rp.{" "}
                                        {barang
                                            .find((b) => b.id === item.barangId)
                                            ?.harga_jual.toLocaleString()}
                                    </td>

                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Rp.{" "}
                                        {barang.find(
                                            (b) => b.id === item.barangId
                                        )?.harga_jual * item.qty}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="text-gray-900 font-bold text-2xl">
                                <th>Belum Ada Penjualan Bulan Ini</th>
                            </tr>
                        )}
                        <tr
                            //   key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-black">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Total Bayar :
                            </th>

                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                200000 {/* {item.harga * item.qty} */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="bg-yellow-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-yellow-500 flex justify-self-center">
                Bayar & Simpan Transaksi
            </button>
        </MainLayout>
    );
};

export default KeranjangBelanja;
