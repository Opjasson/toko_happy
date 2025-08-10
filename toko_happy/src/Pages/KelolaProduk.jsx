import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KelolaProduk = () => {
    const [barang, setBarang] = useState([]);

    const navigate = useNavigate();

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

        const handleDeleteBarang = async (id) => {
            try {
                await axios.delete(`http://localhost:5000/barang/${id}`);
                alert("Barang berhasil dihapus!");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        };

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Kelola Produk</h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <button
                    onClick={() => navigate("/kelola-produk/tambah-produk")}
                    className="bg-green-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-green-500">
                    + Tambah Produk
                </button>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nama Produk
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stok
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {barang.map((item, index) => (
                            <tr
                                key={index}
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    class="px-6 capitalize py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.nama}
                                </th>
                                <td class="px-6 py-4">{item.stok}</td>
                                <td class="px-6 py-4">{item.kategori}</td>
                                <td class="px-6 py-4">
                                    Rp. {item.harga_jual.toLocaleString()}
                                </td>
                                <td class="px-6 py-4">
                                    <a
                                        href={`/kelola-produk/ubah-produk/${item.id}`}
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">
                                        Edit
                                    </a>
                                    <a
                                        onClick={() =>
                                            handleDeleteBarang(item.id)
                                        }
                                        class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">
                                        Hapus
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

export default KelolaProduk;
