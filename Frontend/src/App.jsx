// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Feed from "./components/Feed/Feed";
// import VideoFeed from "./components/Feed/VideoFeed";
// import ChannelFeed from "./components/Feed/ChannelFeed";
// import SearchFeed from "./components/Feed/SearchFeed";

// import { useState } from "react";




// function App() {
//   const [category, setCategory] = useState("New")

//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <div className="flex">
//           <Sidebar category={category} setCategory={setCategory} />
//           <div className="flex-1">
//             <Routes>
//               <Route path="/" element={<Feed category={category} />} />
//               <Route path="/video/:id" element={<VideoFeed />} />
//               <Route path="/channel/:id" element={<ChannelFeed />} />
//               <Route path="/search/:searchTerm" element={<SearchFeed />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;



import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, Header, Sidebar, SearchFeed, VideoFeed, ChannelFeed } from "./components"

function App() {
  const [category, setCategory] = useState('New');
  
  return (
    <>
      <BrowserRouter>
        <div className='h-screen w-full dark:bg-neutral-900 flex flex-col relative'>
          <Header />
          <Sidebar category={category} setCategory={setCategory}/>
          <Routes>
            <Route path="/" element={<Feed category={category}/>} />
            <Route path="/video/:id" element={<VideoFeed/>}/>
            <Route path="/channel/:id" element={<ChannelFeed/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>          
        </div>
      </BrowserRouter>
    </>
  )
}

export default App