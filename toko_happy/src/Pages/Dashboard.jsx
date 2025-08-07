import React from 'react'
import MainLayout from '../Components/Templates/MainLayout'

const Dashboard = () => {
  return (
      <MainLayout>
          <h1 className="text-2xl font-bold">Tambah Pesanan Baru</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <button className="bg-yellow-400 px-4 py-2 text-black font-bold rounded cursor-pointer hover:bg-yellow-500">
                 + Buat Pesanan
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
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                          <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Microsoft Surface Pro
                          </th>
                          <td class="px-6 py-4">White</td>
                          <td class="px-6 py-4">Laptop PC</td>
                          <td class="px-6 py-4">$1999</td>
                          <td class="px-6 py-4">
                              <a
                                  href="#"
                                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                  Tambahkan
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </MainLayout>
  );
}

export default Dashboard
