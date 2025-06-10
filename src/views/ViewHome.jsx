// import React, { useEffect } from 'react'

import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
// import {initAlert} from'@material-tailwind/html'

export const Home = () => {
const [email, setEmail] = useState('');
const[password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = (e)=> {
  e.preventDefault();

  if(email === "cursoreact@gmail.com" && password ==="cursoreact"){
    navigate("products");
  }else {
    alert("Usuario y/o Password incorrectos!");
  }
};

  return (
    <>
      <div className="w-full rounded-lg border shadow-sm overflow-hidden bg-white border-slate-200 shadow-slate-950/5 max-w-xs items-center justify-center mx-auto my-4">
        <div className="border overflow-hidden bg-slate-800 border-slate-950 shadow-slate-950/25 w-[calc(100%-16px)] rounded m-2 grid h-24 place-items-center shadow-none">
          <span className="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-slate-50">Sign In</span>
        </div>
        <form className="w-full h-max rounded px-3.5 py-2.5">
          <div className="mb-4 mt-2 space-y-1.5">
            <label for="email" className="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Email</label>
            <div className="relative w-full">
              <input id="email" placeholder="someone@example.com" type="text" className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="false" data-success="false" data-icon-placement=""
              value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>
          <div className="mb-4 space-y-1.5">
            <label for="password" class="font-sans antialiased text-sm text-slate-800 dark:text-white font-semibold">Password</label>
            <div className="relative w-full">
              <input id="password" placeholder="************" type="password" className="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-error data-[success=true]:border-success text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer" data-error="false" data-success="false" data-icon-placement=""
              value={password}
              onChange={(e)=> setPassword(e.target.value)} />
            </div>
          </div>
          <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" for="check-2">
              <input type="checkbox"
                checked
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="check-2"/>
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer ml-2 text-slate-600 antialiased" for="check-2">
              Remember Me
            </label>
          </div>
          <button onClick={handleLogin} className="mt-4 w-full border font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 shadow-sm hover:shadow-md bg-slate-800 border-slate-800 text-slate-50 hover:bg-slate-700 hover:border-slate-700">Sign In</button>
        </form>
        <div className="w-full px-3.5 pt-2 pb-3.5 rounded text-center">
          <small className="font-sans antialiased text-sm my-1 flex justify-center gap-1 text-slate-600">Don&#x27;t have an account?<a href="#" className="font-sans antialiased text-sm text-slate-800 font-bold">Sign up</a></small>
        </div>
      </div>
      {/* <Product/> */}
    </>
  )
}
export default Home;
