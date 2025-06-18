// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${searchTerm.trim()}`);
//       setSearchTerm("");
//     }
//   };

//   return (
//     <header className="w-full border-b-1 flex items-center justify-between px-4 py-2 bg-white shadow">
//       <div className="text-2xl font-bold text-red-600">YouTube Clone</div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           placeholder="Search"
//           className="border rounded-l px-2 py-1"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-3 rounded-r">
//           Search
//         </button>
//       </form>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Search } from '@mui/icons-material'
import { Mic } from '@mui/icons-material';

import { useNavigate, Link } from 'react-router-dom';
// import Logo from '../../assets/logo.svg';
import StreamIcon from '@mui/icons-material/Stream';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  const handleVoiceSearch = () => {
    // Checking if browser supports SpeechRecognition or not
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Sorry, your browser does not support voice search.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; // or 'en-US', 'hi-IN', etc. 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      // Optionally, auto-submit the search:
      navigate(`/search/${transcript}`);
      setSearchTerm('');

    };

    recognition.onerror = (event) => {
      alert("Voice search error: " + event.error);
    };
  };


  return (
    <>
      <div className="absolute z-20 w-full h-14 md:h-16 flex items-center justify-between px-4 pl-2 sm:px-12 sm:pl-6 py-2 md:py-4 
      bg-white dark:bg-neutral-900 backdrop-filter bg-clip-padding backdrop-blur-md bg-opacity-60 dark:bg-opacity-80 ">
        <Link to='/'>
          <div className="text-xl md:text-2xl font-semibold dark:text-white flex items-center justify-center">
            {/* <img src={Logo}/> */}
            <StreamIcon className='text-blue-500' />
            <div className='ml-1'>
              Ji
            </div>
          </div>
        </Link>

        <div className="flex justify-end items-center w-2/4">
          <form className="flex items-center justify-end h-7 md:h-8 md:w-4/6"
            onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className='h-full w-48 md:w-5/6 px-4 md:px-4 text-xs md:text-sm text-neutral-800 dark:text-white align-middle 
              rounded-3xl rounded-r-none border-[1px] border-neutral-500 focus:outline-none bg-transparent'/>

            <button onClick={handleVoiceSearch} className="bg-neutral-600 h-full w-11 md:w-14 rounded-3xl rounded-l-none text-white border-[1px] 
              border-neutral-500 border-l-0">
              <Search />
            </button>
            <Mic onClick={handleVoiceSearch} className="text-neutral-800 dark:text-white" />
          </form>

          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

export default Header