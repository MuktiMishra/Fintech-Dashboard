import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Mock Login Success\nEmail: ${email}`);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D1117] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-6 sm:p-8">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="mt-2 text-sm text-slate-400">
          Enter your credentials to continue.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0B1220] px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0B1220] px-4 py-3 outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-500 py-3 font-medium hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300">
            Sign up
          </Link>
        </p>

        <Link
          to="/"
          className="mt-4 block w-full rounded-xl border border-white/10 py-3 text-center hover:bg-white/5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}