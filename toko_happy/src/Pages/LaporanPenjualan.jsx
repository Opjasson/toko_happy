import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPrint } from "react-icons/fa";
import axios from "axios";
import { FaBackward } from "react-icons/fa";
import MainLayout from "../Components/Templates/MainLayout";

const LaporanPenjualan = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold">Laporan Penjualan</h1>
            <div
                id="setDate"
                className="flex items-center mx-auto mb-10 border w-[50%] bg-slate-300 lg:px-2 px-1 lg:py-1.5 py-0 lg:rounded-xl rounded-sm h-fit justify-between">
                <div>
                    <p>dari tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        //   value={findLower1}
                        //   onChange={(e) => setfindLower1(e.target.value)}
                    />
                </div>
                <p className="w-32 border"></p>

                <div>
                    <p>sampai tanggal :</p>
                    <input
                        type="date"
                        className="outline-none w-52 border text-sm"
                        //   value={findLower2}
                        //   onChange={(e) => setfindLower2(e.target.value)}
                    />
                </div>
            </div>

            <div
                //   onClick={handlePrint}
                id="printButton"
                className="bg-green-500 justify-center gap-2.5 flex w-1/12 px-3 py-2 hover:cursor-pointer hover:bg-green-600 rounded-xl text-white font-extrabold">
                <FaPrint className="text-xl mt-0.5" />
                <p className="text-xl">Print</p>
            </div>

            <div
                id="tombolKembali"
                //   onClick={() => navigate("/")}
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

                {/* <div className="my-5">
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
              </div> */}

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
                                    2022-2-2 {/* {item.createdAt} */}
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
                            {/* ))
                          ) : (
                              <h3 className="text-gray-900 font-bold text-2xl">
                                  Belum Ada Penjualan Bulan Ini
                              </h3>
                          )} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default LaporanPenjualan;
