import React, { useEffect, useState } from "react";
import MainLayout from "../Components/Templates/MainLayout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UbahProduk = () => {
    const [namaBarang, setNamaBarang] = useState();
    const [kategori, setKategori] = useState();
    const [hargaBarang, setHargaBarang] = useState();
    const [stokBarang, setStokBarang] = useState();

    const navigate = useNavigate();
    const { id } = useParams();

    const GetBarangById = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/barang/${id}`
            );
            setNamaBarang(response.data.nama);
            setKategori(response.data.kategori);
            setHargaBarang(response.data.harga_jual);
            setStokBarang(response.data.stok);

            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        GetBarangById();
    }, [id]);

    const handleUpdateBarang = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/barang/${id}`, {
                nama: namaBarang,
                kategori: kategori,
                harga_jual: hargaBarang,
                stok: stokBarang,
            });
            alert("Barang Berhasil Dirubah!");
            navigate("/kelola-produk");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Ubah Produk</h1>
            <form onSubmit={handleUpdateBarang} className="space-y-3">
                <input
                    type="text"
                    name="NamaProduk"
                    placeholder="Nama Produk"
                    onChange={(a) => setNamaBarang(a.target.value)}
                    className="w-full capitalize border p-2 rounded bg-blue-100"
                    value={namaBarang}
                />

                <select
                    name="kategori"
                    onChange={(a) => setKategori(a.target.value)}
                    className="w-full border p-2 rounded">
                    <option value={kategori}>{kategori}</option>
                    <option value="meja">Meja</option>
                    <option value="kursi">Kursi</option>
                    <option value="etalase">Etalase</option>
                    <option value="buffet">Buffet</option>
                </select>

                <input
                    type="number"
                    name="harga"
                    placeholder="Harga Barang"
                    onChange={(a) => setHargaBarang(a.target.value)}
                    className="w-full border p-2 rounded bg-blue-100"
                    value={hargaBarang}
                />

                <input
                    type="number"
                    name="stok"
                    placeholder="Stok Barang"
                    onChange={(a) => setStokBarang(a.target.value)}
                    className="w-full border p-2 rounded bg-blue-100"
                    value={stokBarang}
                />

                <button
                    type="submit"
                    className="bg-green-500 cursor-pointer text-white w-full py-2 rounded hover:bg-green-600">
                    Simpan
                </button>
            </form>
        </MainLayout>
    );
};

export default UbahProduk;
