import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [transaksiId, setTransaksiId] = useState();
    const [transReady, setTransReady] = useState(false);
    const [dataTrans, setDataTrans] = useState();

    const getMenus = async () => {
        try {
            const response = await axios.get("http://localhost:5000/barang");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenus();
    }, []);

    const createTransaksi = async () => {
        if (transReady) {
            alert("Silahkan Melanjutkan Belanja :)");
        } else {
            try {
                const response = await axios.post(
                    "http://localhost:5000/transaksi"
                );
                setTransReady(true);
                setTransaksiId(response.data.response.id);
                console.log(response.data.response.id);

                alert("Silahkan Melanjutkan Belanja :)");
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    const getTransaksiReady = async () => {
        try {
            const transaksi = await axios.get(
                "http://localhost:5000/transaksi"
            );
            // console.log(transaksi.data.response);
            const cekTransNullBayar = transaksi.data.response.filter(
                (item) => item.bayarPelanggan === 0
            );
            setDataTrans(cekTransNullBayar[0]);
            setTransaksiId(cekTransNullBayar[0].id);
            console.log(cekTransNullBayar[0]);
            cekTransNullBayar.length > 0
                ? setTransReady(true)
                : setTransReady(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getTransaksiReady();
    }, []);

    const addToCart = async (id) => {
        const cek = dataTrans.carts.find((b) => b.barangId === id);
        console.log(cek);
        if (transReady) {
            if (cek) {
                try {
                    await axios.patch(`http://localhost:5000/cart/${cek.id}`, {
                        qty: cek.qty + 1,
                    });
                    alert("Barang Berhasil Dimasukan Keranjang!");
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                try {
                    await axios.post("http://localhost:5000/cart", {
                        qty: 1,
                        transaksiId: transaksiId,
                        barangId: id,
                    });
                    alert("Barang Berhasil Dimasukan Keranjang!");
                } catch (error) {
                    console.log(error.message);
                }
            }
        } else {
            alert("Buat Pesanan Dulu!");
        }
    };

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Tambah Pesanan Baru</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <button
                    onClick={createTransaksi}
                    className={`bg-yellow-400 px-4 py-2 ${
                        transReady ? "hidden" : "block"
                    } text-black font-bold rounded cursor-pointer hover:bg-yellow-500`}>
                    + Buat Pesanan
                </button>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Produk
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stok
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium capitalize text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.nama}
                                </th>
                                <td className="px-6 py-4">{item.stok}</td>
                                <td className="px-6 py-4">{item.kategori}</td>
                                <td className="px-6 py-4">
                                    Rp. {item.harga_jual.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    <a
                                        onClick={() => addToCart(item.id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                                        Tambahkan
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
