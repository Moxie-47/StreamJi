// import React, { useState, useEffect } from "react";
// import { fetchFromAPI } from "../../utils/fetchAPI";
// import VideoCard from "../Videos/VideoCard";

// function Feed({ category }) {
//   const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     setVideos(null);
//     fetchFromAPI(`search?part=snippet&q=${category}`)
//       .then((data) => setVideos(data.items))
//       .catch((error) => console.error(`Knock knock...who's there ? Its error : ${error}`))
//   }, [category])

//   return (
//     <main className="flex-1 p-4 bg-white min-h-screen">
//       <h2 className="text-xl font-bold mb-4">{category} Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {!videos ? (
//           <div className="text-gray-500">Loading...</div>
//         ) : (
//           videos.map((video) =>
//             video.id.videoId ? (
//               <VideoCard video={video} key={video.id.videoId} />
//             ) : null
//           )
//         )}
//       </div>
//     </main>
//   );
// }

// export default Feed;







import React, { useState, useEffect } from 'react'
import Videos from '../Videos/Videos';
import { fetchFromAPI } from '../../utils/fetchAPI';

const Feed = ({category}) => {  
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${category}`)
    .then((data) => setVideos(data.items))
  }, [category])

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col md:flex">
            <div className="absolute w-full h-full py-16 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center py-2 px-4 font-semibold dark:text-white">
                  {category} <span className='text-blue-500'>videos</span>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default Feed