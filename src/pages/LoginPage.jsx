import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const {loginUser, isLoggedIn} = useFirebase();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     if(isLoggedIn){
    //         navigate("/admin-dashboard");
    //     }
    // },[isLoggedIn, ])


  const handleSubmit = async (e) => {   
    e.preventDefault();
    const result = await loginUser(email, password);
    console.log(result)
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157))">
    <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit" className="w-full bg-black text-white py-2 rounded-md" >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}

export default LoginPage