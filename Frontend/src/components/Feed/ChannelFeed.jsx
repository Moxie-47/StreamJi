// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchFromAPI } from "../../utils/fetchAPI";

// function ChannelFeed() {
//   const { id } = useParams();
//   const [channel, setChannel] = useState(null);
//   const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     // Fetch channel details
//     fetchFromAPI(`channels?part=snippet&id=${id}`)
//       .then((data) => setChannel(data.items[0]));

//     // Fetch channel's videos
//     fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
//       .then((data) => setVideos(data.items));
//   }, [id]);

//   if (!channel) return <div className="p-8 text-xl min-h-screen flex items-center justify-center ">Loading channel...</div>;

//   return (
//     <div className="p-4">
//       <div className="flex items-center gap-4 mb-6">
//         <img
//           src={channel.snippet.thumbnails.high.url}
//           alt={channel.snippet.title}
//           className="w-24 h-24 rounded-full"
//         />
//         <div>
//           <h2 className="text-2xl font-bold">{channel.snippet.title}</h2>
//           <p className="text-gray-500">{channel.snippet.customUrl}</p>
//         </div>
//       </div>
//       <h3 className="text-lg font-semibold mb-2">Channel Videos</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {videos
//           ? videos.map((video) =>
//               video.id.videoId ? (
//                 <div key={video.id.videoId}>
//                   <img
//                     src={video.snippet.thumbnails.high.url}
//                     alt={video.snippet.title}
//                     className="rounded"
//                   />
//                   <div className="mt-1 font-medium text-sm">{video.snippet.title.slice(0, 60)}</div>
//                 </div>
//               ) : null
//             )
//           : <div>Loading videos...</div>}
//       </div>
//     </div>
//   );
// }

// export default ChannelFeed;


import React, { useEffect, useState } from 'react'
import Videos from '../Videos/Videos'
import ChannelCard from '../Channel/ChannelCard';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchAPI';

const ChannelFeed = () => {
  const [channel, setChannel] = useState();
  const [videos, setVideos] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannel(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <div className='absolute w-full h-full'>
        <div className="w-full h-full relative flex-col items-center justify-center md:flex">
            <div className="absolute w-full h-full flex-col py-16 px-2 md:py-20 md:pl-24 bg-white dark:bg-neutral-900 scroll-smooth overflow-auto 
            scrollbar-thin dark:scrollbar-thumb-neutral-500 scrollbar-thumb-neutral-500 scrollbar-track-neutral-300 dark:scrollbar-track-neutral-700">
                <div className="text-md max-md:text-center flex justify-center my-6 py-4 px-2 
                  font-semibold dark:text-white shadow-md rounded-xl">
                   <ChannelCard channel={channel}/>
                </div>

                <Videos videos={videos} />
            </div>
        </div>
    </div>
  )
}

export default ChannelFeed