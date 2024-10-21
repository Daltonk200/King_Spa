import React from 'react';
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/Images/facial_treatment.jpeg')` }}>
      <div className="absolute inset-0 bg-white opacity-10"></div>
      {/* Login form */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-pink-500 text-center mb-6">Sign in to your account</h2>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">UserName</label>
          <input
            type="text"
            placeholder="Enter UserName"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          />
        </div>

        {/* Remember me and Forgot password if u see its not useful just delete it ya */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2 rounded" />
            Remember me
          </label>
          <a href="#" className="text-sm text-pink-500 hover:underline">Forgot password?</a>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
        >
          Log in to your account
        </button>

        {/* Sign up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          CLick here to go back home 
          <Link href="/" className="text-pink-500 hover:underline"> Home</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
