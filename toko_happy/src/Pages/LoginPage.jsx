import React from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
      e.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      // Tambahkan logic login API di sini
  };

  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-white text-lg font-bold text-center mb-5">
                  Login Toko Happy
              </h2>
              <form onSubmit={handleLogin}>
                  <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200">
                      Login
                  </button>
              </form>
          </div>
      </div>
  );
}

export default LoginPage
