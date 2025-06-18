// import { DarkMode, LightMode } from "@mui/icons-material";
// import { useEffect, useState } from "react"


// const ThemeToggle = () => {
//     const [theme, setTheme] = useState('light')

//     useEffect(() => {
//         document.body.classList.remove('light', 'dark');
//         document.body.classList.add(theme);

//     }, [theme])

//     const handleTheme = (e) => {
//         const status = e.currentTarget.checked
//         if (status) {
//             setTheme('light')
//         } else {
//             setTheme('dark')
//         }
//     }
//     return (
//         <>
//             <label className='ml-2 md:ml-8 cursor-pointer'>
//                 <input type="checkbox" value=""
//                     className="sr-only"
//                     onChange={handleTheme} checked={theme === "light"} />

//                 <div className="h-6 w-6 flex items-center">
//                     {theme === 'dark' ? <LightMode className='text-white' /> : <DarkMode />}
//                 </div>
//             </label>
//         </>
//     )
// }



// export default ThemeToggle



import React, { useState, useEffect } from 'react'
import { DarkMode, LightMode} from '@mui/icons-material';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme])

  const handleChange = (e) => {
    const status = e.currentTarget.checked
    if (status) {
        setTheme('dark')
    } else {
        setTheme('light')
    }
  }
  return (
    <>  
      <label className='ml-2 md:ml-8 cursor-pointer'>
        <input type="checkbox" value="" 
        className="sr-only" 
        onChange={handleChange} checked={theme==="dark"}/> 

        <div className="h-6 w-6 flex items-center">
          {theme === 'dark' ? <LightMode className='text-white'/> : <DarkMode/>}
        </div>
      </label> 
    </>
  )
}

export default ThemeToggle