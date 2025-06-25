import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router';
import { api } from '../../../api/index';

export const Navbar = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        api.get('products').then(res => setAllProducts(res.data));
    }, []);

    useEffect(() => {
        if (search.length > 0) {
            const filtered = allProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
            setSuggestions(filtered.slice(0, 5));
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [search, allProducts]);

    const handleSelect = (product) => {
        setSearch(product.title);
        setShowSuggestions(false);
        navigate(`/products/${product.id}`);
    };

    // Cerrar sugerencias al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="rounded-lg border shadow-lg overflow-visible p-2 shadow-slate-950/5 w-full bg-white" style={{ position: 'relative', left: 0, right: 0, zIndex: 100}}>
            <div className="flex items-center w-full">

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
                <div className="ml-auto mr-12 w-60 relative" ref={inputRef} style={{zIndex: 1000}}>
                    <div className="relative w-full">
                        <input
                            placeholder="Search..."
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onFocus={() => search && setShowSuggestions(true)}
                            className="w-full aria-disabled:cursor-not-allowed pl-7 pr-8 outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 ring-transparent border border-slate-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-1.5 px-2.5 ring shadow-sm bg-white rounded-lg hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 duration-300 peer"
                        />
                        {/* Botón cancelar */}
                        {search && (
                            <button
                                type="button"
                                onClick={() => { setSearch(''); setShowSuggestions(false); }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-grey-500 focus:outline-none"
                                aria-label="Cancelar búsqueda"
                                tabIndex={0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        )}
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="absolute left-0 right-0 bg-white border border-slate-800 rounded-lg mt-1 shadow-2xl max-h-48 overflow-auto" style={{zIndex: 9999, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)'}}>
                                {suggestions.map(product => (
                                    <li
                                        key={product.id}
                                        className="px-3 py-2 cursor-pointer hover:bg-slate-100 text-sm text-slate-900"
                                        onMouseDown={() => handleSelect(product)}
                                        style={{background: 'rgba(255,255,255,0.98)'}}
                                    >
                                        {product.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div>
                    <NavLink to="/login" className="font-sans antialiased text-sm text-current flex items-center gap-x-2 p-1 hover:text-primary">
                     <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>Login
                     </NavLink>
                </div>
            </div>
        </nav>


    )
}
export default Navbar;
