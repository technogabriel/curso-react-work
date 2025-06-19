// import React, { useEffect } from 'react'

import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Spinner from '../Utils/Spinner';

// import {initAlert} from'@material-tailwind/html'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email === "cursoreact@gmail.com" && password === "cursoreact") {
        setShowAlert(false);
        setLoading(false);
        navigate("products");
      } else {
        setShowAlert(true);
        setLoading(false);
        setEmail('');
        setPassword('');
      }
    }, 1200);
  };

  return (
    <>
      {showAlert && (
        <div role="alert" className="relative flex w-full items-start rounded-none border border-b-0 border-l-4 border-r-0 border-t-0 border-red-500 bg-red-500/10 p-2 font-medium text-red-500">
          <span className="grid shrink-0 place-items-center p-1">
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-5 w-5"><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z" fill="currentColor"></path></svg>
          </span>
          <div className="m-1.5 w-full font-sans text-base leading-none">usuario o password incorrecto</div>
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 max-w-xs items-center justify-center mx-auto my-4">
          <div className="border overflow-hidden bg-slate-800 border-slate-950 shadow-slate-950/25 w-[calc(100%-16px)] rounded m-2 grid h-24 place-items-center shadow-none">
            <span className="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-slate-50">Sign In</span>
          </div>
          <form className="w-full h-max rounded px-3.5 py-2.5" onSubmit={handleLogin}>
            <div className="mb-4 mt-2 space-y-1.5">
              <label htmlFor="email" className="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Email</label>
              <div className="relative w-full">
                <input id="email" placeholder="someone@example.com" type="email" className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="true" data-success="true" data-icon-placement=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="mb-4 space-y-1.5">
              <label htmlFor="password" className="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Password</label>
              <div className="relative w-full">
                <input id="password" placeholder="************" type="password" className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="false" data-success="false" data-icon-placement=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} required/>
              </div>
            </div>
            <button type="submit" className="mt-4 w-full border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Sign In</button>
          </form>
          <div className="w-full px-3.5 pt-2 pb-3.5 rounded text-center">
            <small className="font-sans antialiased text-sm my-1 flex justify-center gap-1 text-slate-600">Don&#x27;t have an account?<a href="#" className="font-sans antialiased text-sm text-slate-800 font-bold">Sign up</a></small>
          </div>
        </div>
      )}
    </>
  )
}
export default Login;
