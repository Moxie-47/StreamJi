import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import VideoFeed from "./components/Feed/VideoFeed";
import ChannelFeed from "./components/Feed/ChannelFeed";

import { useState } from "react";

function Home() {
  return <div className="text-2xl font-bold">Home page</div>
}

function Video() {
  return <div className="text-2xl font-bold">Video page</div>
}

function Channel() {
  return <div className="text-2xl font-bold">Channel page</div>
}

function Search() {
  return <div className="text-2xl font-bold">Search Page</div>
}

function App() {
  const [category, setCategory] = useState("New")

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Sidebar category={category} setCategory={setCategory}></Sidebar>
        </div>

        <Routes>
          <Route path="/" element={<Feed category={category} />} />
          <Route path="/video/:id" element={<VideoFeed />} />
          <Route path="/channel/:id" element={<ChannelFeed />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/video/:id" element={<Video />}></Route>
          <Route path="/channel/:id" element={<Channel />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;