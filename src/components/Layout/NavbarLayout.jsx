import React from 'react'
import { NavLink } from 'react-router';

export const Navbar = () => {
    return (
        <nav className="rounded-lg border shadow-lg overflow-hidden p-2  shadow-slate-950/5 mx-auto w-full max-w-screen-xl">
            <div className="flex items-center">

                <div className="hidden lg:block">
                    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
                        <li>
                            <NavLink to="/" className="font-sans antialiased text-sm text-current flex items-center gap-x-2 p-1 hover:text-primary">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className="font-sans antialiased text-sm text-current flex items-center gap-x-2 p-1 hover:text-primary"
                            >
                                <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>Usuarios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="font-sans antialiased text-sm text-current flex items-center gap-x-2 p-1 hover:text-primary"
                            >
                                <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4"><path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 21L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.6914 11.8285L3.89139 7.49521C3.49147 7.27304 3 7.56222 3 8.01971V16.647C3 16.8649 3.11813 17.0656 3.30861 17.1715L11.1086 21.5048C11.5085 21.727 12 21.4378 12 20.9803V12.353C12 12.1351 11.8819 11.9344 11.6914 11.8285Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"></path></svg>Products
                            </NavLink>
                        </li>

                    </ul>

                </div>
                <div className="ml-auto w-40">
                    <div className="relative w-full">
                        <input placeholder="Search..." type="text" className="w-full aria-disabled:cursor-not-allowed pl-7 outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 ring-transparent border border-slate-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-1.5 px-2.5 ring shadow-sm bg-white rounded-lg hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 duration-300 peer" />
                        <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 peer-hover:text-slate-800  text-slate-600/70 peer-focus:text-slate-800 dark:peer-hover:text-white dark:peer-focus:text-white transition-all duration-300 ease-in overflow-hidden w-4 h-4"><svg width="1.5em" height="1.5em" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-full w-full"><path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                    </div>
                </div>
            </div>
        </nav>


    )
}
export default Navbar;
