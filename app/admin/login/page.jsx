"use client";
import React, { useState } from "react";
import { MdOutlineEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);



      setLoading(false);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-slate-50 to-amber-50 p-4">
      {/* Main Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500"></div>

        <div className="p-8 sm:p-10">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="mx-auto w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-4 text-rose-600 border border-rose-100">
              <RiAdminLine size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 font-serif">
          Virasat
            </h1>
            <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest">
              Admin Portal
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-rose-600 transition-colors">
                  <MdOutlineEmail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all duration-200"
                  placeholder="admin@virasat.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-rose-600 transition-colors">
                  <MdLockOutline size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all duration-200"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                >
                  {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 px-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-semibold rounded-xl shadow-lg shadow-rose-500/30 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 ${
                loading ? "opacity-75 cursor-not-allowed scale-[0.98]" : "hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Saaj Riwaaj. Restricted Access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;