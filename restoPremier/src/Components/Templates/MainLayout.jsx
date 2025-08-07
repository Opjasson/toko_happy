import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-6 text-center border-b border-gray-700">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gray-600 mb-2" />
                    <div className="font-bold">Fauzan Falah</div>
                    <div className="text-sm">(12314121)</div>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Master
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Transaksi
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-700 rounded">
                        Setting
                    </a>
                </nav>
            </aside>

            <div className="flex-1">
                {/* Navbar */}
                <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                    <div className="text-lg font-bold">
                        CV DARUTTAQWA
                        <span className="block text-sm font-normal">
                            JL. UJUNG HARAPAN KAV. DARUTTAQWA RT 005/014 NO.47,
                            KAB. BEKASI
                        </span>
                    </div>
                    <button className="bg-yellow-400 px-4 py-2 text-black font-bold rounded">
                        Logout
                    </button>
                </header>

                <main className="p-6 space-y-6">
                    <h1 className="text-2xl font-bold">Keranjang Penjualan</h1>
                </main>
            </div>
        </div>
    );
}
