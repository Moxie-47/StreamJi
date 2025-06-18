// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchFromAPI } from "../../utils/fetchAPI";
// import VideoCard from "../Videos/VideoCard";

// function SearchFeed() {
//   const { searchTerm } = useParams();
//   const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     setVideos(null);
//     fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
//       .then(data => setVideos(data.items));
//   }, [searchTerm]);

//   return (
//     <main className="flex-1 p-4 bg-white min-h-screen">
//       <h2 className="text-xl font-bold mb-4">
//         Search results for: <span className="text-blue-600">{searchTerm}</span>
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {!videos
//           ? <div className="text-gray-500">Loading...</div>
//           : videos.map(video =>
//               video.id.videoId ? (
//                 <VideoCard video={video} key={video.id.videoId} />
//               ) : null
//             )
//         }
//       </div>
//     </main>
//   );
// }

// export default SearchFeed;


import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../../utils/fetchAPI'
import { useParams } from 'react-router-dom';
import Videos from '../Videos/Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col md:flex">
            <div className="absolute w-full h-full py-16 px-2 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center font-semibold dark:text-white">
                  Search <span className='text-blue-500'>result:</span>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default SearchFeed