import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function MainLayout({children}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-6 text-center border-b border-gray-700">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gray-600 mb-2" />
                    <div className="font-bold">Staf Kasir</div>
                    <div className="text-sm">(0021)</div>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Dashboard
                    </a>

                    <a
                        href="/kelola-produk"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Kelola Produk
                    </a>

                    <a
                        href="/laporan-penjualan"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Laporan Penjualan
                    </a>

                    <a
                        href="/manajemen-pengguna"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Manajemen Pengguna
                    </a>

                    <a
                        href="/transaksi-penjualan"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Transaksi Penjualan
                    </a>

                    <a
                        href="/keranjang-belanja"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Keranjang Belanja
                    </a>
                </nav>
            </aside>

            <div className="flex-1">
                {/* Navbar */}
                <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                    <div className="text-lg font-bold">
                        TOKO HAPPY
                        <span className="block text-sm font-normal">
                            Jl. Ps. Klutuk Pangkah Kec. Pangkah, Tegal, Jawa
                            Tengah 52471, Indonesia
                        </span>
                    </div>
                    <button className="bg-yellow-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-yellow-500">
                        Logout
                    </button>
                </header>

                <main className="p-6 space-y-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
