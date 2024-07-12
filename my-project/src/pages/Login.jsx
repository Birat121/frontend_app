import React, { useState } from 'react';
import Header from '../components/navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white text-gray-900 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            className="p-4 text-xl border border-gray-300 rounded-lg"
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            className="p-4 text-xl border border-gray-300 rounded-lg"
          />
          <button 
            type="submit" 
            className="p-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;

