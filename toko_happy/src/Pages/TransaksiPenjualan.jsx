import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TransaksiPenjualan = () => {
    const [historyTransaksi, setHistoryTransaksi] = useState([]);

    const [barang, setBarang] = useState([]);

    const navigate = useNavigate()

    const getHistorys = async () => {
        try {
            const response = await axios.get("http://localhost:5000/transaksi");
            // const dataArray = response;
            console.log(response.data.response);

            setHistoryTransaksi(response.data.response);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataBarang = async () => {
        try {
            const response = await fetch("http://localhost:5000/barang");
            const barang = await response.json();
            setBarang(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataBarang();
    }, []);

    useEffect(() => {
        getHistorys();
    }, []);
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Transaksi Penjualan</h1>
            <div className="flex justify-between px-16 bg-slate-100 p-5 rounded-xl flex-wrap">
                {historyTransaksi.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/cetak-transaksi/${item.id}`)}
                        class="block w-2/5 p-6 rounded-lg shadow-sm  bg-gray-800 border-gray-700 hover:bg-gray-700 hover:cursor-pointer mb-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">
                            History Transaksi :
                        </h5>

                        <p class="font-normal text-blue-600">
                            Tanggal Pemesanan : {item.createdAt.split("T")[0]}
                        </p>

                        <p class="font-normal text-blue-600">
                            Id Pesanan : {item.uuid}
                        </p>

                        <p class="font-normal text-blue-600">
                            Daftar Pesanan :
                        </p>
                        {item.carts.map((a, index) => (
                            <p className="text-white" key={index}>
                                {
                                    barang.find((b) => b.id === a.barangId)
                                        ?.nama
                                }{" "}
                                x {a.qty} :{" "}
                                {barang.find((b) => b.id === a.barangId)?.harga_jual}
                            </p>
                        ))}
                        <p class="font-normal text-blue-600">
                            Total Harga : {item.totalHarga}
                        </p>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default TransaksiPenjualan;
