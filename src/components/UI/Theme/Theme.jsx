import React, { useEffect, useState } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);
    
    const handleChangeTheme = (e) => {
        setTheme(e.target.checked ? 'dark' : 'light')
    };

  return (
    <div className="flex items-center gap-2" style={{alignContent: 'center', justifyContent: 'center'}}>
    <input id="switch" className="relative inline-block h-6 w-10 appearance-none rounded-full before:absolute before:left-0 before:top-0 before:inline-block before:h-full before:w-full before:rounded-full before:bg-slate-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:left-0.5 after:top-2/4 after:h-5 after:w-5 after:-translate-y-2/4 after:rounded-full after:bg-white after:transition-transform after:duration-200 after:ease-in checked:before:bg-slate-800 checked:after:translate-x-[calc(100%-4px)] dark:after:bg-white" type="checkbox" onChange={handleChangeTheme} checked={theme === 'dark'} />
    <label for="switch" className="font-sans text-base text-slate-600 antialiased">Dark Mode</label>
</div>

  )
}

export default Theme