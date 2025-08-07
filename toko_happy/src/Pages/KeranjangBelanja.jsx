import React from "react";
import MainLayout from "../Components/Templates/MainLayout";

const KeranjangBelanja = () => {
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
                        {/* {filteredData.length > 0 ? (
                              filteredData.map((item, index) => ( */}
                        <tr
                            //   key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-black">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1 {/* {index + 1} */}
                            </th>

                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Indomie {/* {item.nama_menu} */}
                            </th>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5 {/* {item.qty} */}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                20000 {/* {item.harga} */}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                200000 {/* {item.harga * item.qty} */}
                            </td>
                        </tr>

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
                        {/* ))
                          ) : (
                              <h3 className="text-gray-900 font-bold text-2xl">
                                  Belum Ada Penjualan Bulan Ini
                              </h3>
                          )} */}
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
