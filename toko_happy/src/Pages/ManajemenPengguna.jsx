import React from 'react'
import { useState } from 'react';

const ManajemenPengguna = () => {
   const [users, setUsers] = useState([{ username: "admin", role: "admin" }]);
   const [form, setForm] = useState({ username: "", password: "", role: "" });

   const handleChange = (e) => {
       setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
       e.preventDefault();
       if (!form.username || !form.password || !form.role) return;
       setUsers([...users, { username: form.username, role: form.role }]);
       setForm({ username: "", password: "", role: "" });
   };

   const handleDelete = (index) => {
       const newUsers = [...users];
       newUsers.splice(index, 1);
       setUsers(newUsers);
   };

   return (
       <div className="p-6 max-w-4xl mx-auto">
           <h1 className="text-2xl font-bold mb-4">
               <span className="text-purple-700 mr-2">👤</span>
               Manajemen Pengguna
           </h1>

           {/* Tambah Pengguna */}
           <div className="bg-white shadow p-4 mb-6 border">
               <h2 className="text-lg font-semibold text-purple-700 mb-2">
                   + Tambah Pengguna
               </h2>
               <form onSubmit={handleSubmit} className="space-y-3">
                   <input
                       type="text"
                       name="username"
                       placeholder="Username"
                       value={form.username}
                       onChange={handleChange}
                       className="w-full border p-2 rounded bg-blue-100"
                   />
                   <input
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={form.password}
                       onChange={handleChange}
                       className="w-full border p-2 rounded bg-blue-100"
                   />
                   <select
                       name="role"
                       value={form.role}
                       onChange={handleChange}
                       className="w-full border p-2 rounded">
                       <option value="">-- Pilih Role --</option>
                       <option value="admin">Admin</option>
                       <option value="kasir">Kasir</option>
                   </select>
                   <button
                       type="submit"
                       className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
                       Simpan
                   </button>
               </form>
           </div>

           {/* Daftar Pengguna */}
           <div className="bg-white shadow p-4 border">
               <h2 className="text-lg font-semibold text-pink-600 mb-4">
                   📋 Daftar Pengguna
               </h2>
               <table className="w-full border text-left">
                   <thead>
                       <tr className="bg-gray-100">
                           <th className="p-2 border">No</th>
                           <th className="p-2 border">Username</th>
                           <th className="p-2 border">Role</th>
                           <th className="p-2 border">Aksi</th>
                       </tr>
                   </thead>
                   <tbody>
                       {users.map((user, index) => (
                           <tr key={index}>
                               <td className="p-2 border">{index + 1}</td>
                               <td className="p-2 border">{user.username}</td>
                               <td className="p-2 border">{user.role}</td>
                               <td className="p-2 border">
                                   <button
                                       onClick={() => handleDelete(index)}
                                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                       Hapus
                                   </button>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       </div>
   );
}

export default ManajemenPengguna
